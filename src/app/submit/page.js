"use client";

import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import styles from "../page.module.css";
import { useState } from "react";

export default function SubmitPage() {
  const [form, setForm] = useState({
    name: "",
    medium: "",
    email: "",
    instagram: "",
    tiktok: "",
    website: "",
    bio: "",
    shown: false,
    native: false,
    image: "",
    notes: "",
    find: "",
    accepted: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleImageUpload = async () => {
    if (!imageFile) return "";
    setUploading(true);
    const formData = new FormData();
    formData.append("file", imageFile);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    setUploading(false);
    if (!res.ok) {
      setError("Image upload failed");
      return "";
    }
    const data = await res.json();
    return data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    let imageUrl = form.image;
    if (imageFile) {
      imageUrl = await handleImageUpload();
      if (!imageUrl) return;
    }
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, image: imageUrl, accepted: false }),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Submission failed");
    }
  };

  // Helper to check if all required fields are filled
  const requiredFilled =
    form.name.trim() &&
    form.email.trim() &&
    form.medium.trim() &&
    form.bio.trim() &&
    (imageFile || form.image) &&
    (form.native === true || form.native === false);

  if (submitted) {
    return (
      <div className={styles.pageContent}>
        <Navbar />
        <ThemeToggle />
        <div className={styles.formBox}>
          <h2>Thank you for your submission!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContent}>
      <Navbar />
      <ThemeToggle />
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Gallery Submission Form</h2>
        <div className={styles.formNote}>
          <strong>Please note:</strong> The information you provide in this form will be used to present your work on the Good Friends Gallery website. Choose your photo thoughtfully and share details you'd like the public to see.
        </div>
        <div className={styles.formRow}>
          <label className={styles.formCol}>
            <span>
              Name <span className={styles.requiredStar}>*</span>
            </span>
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label className={styles.formCol}>
            <span>
              Email <span className={styles.requiredStar}>*</span>
            </span>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
        </div>
        <label>
          <span>
            Medium <span className={styles.requiredStar}>*</span>
          </span>
          <input name="medium" value={form.medium} onChange={handleChange} required />
        </label>
        <div className={styles.formRow}>
          <label className={styles.formCol}>
            Instagram
            <input name="instagram" value={form.instagram} onChange={handleChange} />
          </label>
          <label className={styles.formCol}>
            TikTok
            <input name="tiktok" value={form.tiktok} onChange={handleChange} />
          </label>
          <label className={styles.formCol}>
            Website
            <input name="website" value={form.website} onChange={handleChange} />
          </label>
        </div>
        <label>
          <span>
            Bio (about yourself, max 250 words) <span className={styles.requiredStar}>*</span>
          </span>
          <textarea name="bio" value={form.bio} onChange={handleChange} rows={4} maxLength={2000} required />
        </label>
        <div className={styles.formRow}>
          <div className={styles.radioGroup} style={{flex: 1}}>
            <span className={styles.radioLabel}>Have you exhibited your work in a gallery before?</span>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="shown"
                value="yes"
                checked={form.shown === true}
                onChange={() => setForm(prev => ({ ...prev, shown: true }))}
                required
              />
              Yes
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="shown"
                value="no"
                checked={form.shown === false}
                onChange={() => setForm(prev => ({ ...prev, shown: false }))}
                required
              />
              No
            </label>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.radioGroup} style={{flex: 1}}>
            <span className={styles.radioLabel}>Are you a native New Yorker? <span className={styles.requiredStar}>*</span></span>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="native"
                value="yes"
                checked={form.native === true}
                onChange={() => setForm(prev => ({ ...prev, native: true }))}
                required
              />
              Yes
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="native"
                value="no"
                checked={form.native === false}
                onChange={() => setForm(prev => ({ ...prev, native: false }))}
                required
              />
              No
            </label>
          </div>
        </div>
        {/* Image input with custom style */}
        <div className={styles.imageInputBox}>
          <label className={styles.imageInputLabel}>
            <span>
              {imageFile ? imageFile.name : "Click to select an image (one image only)"} <span className={styles.requiredStar}>*</span>
            </span>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className={styles.imagePreview}
            />
          )}
        </div>
        <div className={styles.formRow}>
          <label className={styles.formCol}>
            Additional notes (including size and dimensions of work)
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={2} />
          </label>
          <label className={styles.formCol}>
            How did you find out about us?
            <input name="find" value={form.find} onChange={handleChange} />
          </label>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.consentBox}>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={e => setAgree(e.target.checked)}
              required
            />
            <span style={{marginLeft: 8}}>
              I agree the use of my information to be showcased on the Good Friends Gallery site
            </span>
          </label>
        </div>
        <button type="submit" disabled={uploading || !agree || !requiredFilled}>
          {uploading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
} 
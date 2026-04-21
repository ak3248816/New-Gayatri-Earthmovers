"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Upload, FileJson, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setMessage(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/admin/catalog", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        setFile(null); // Reset
      } else {
        setMessage({ type: 'error', text: data.error || "Failed to upload file" });
      }
    } catch {
      setMessage({ type: 'error', text: "An unexpected error occurred" });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-[80vh] flex-col items-center justify-center bg-background pt-24 pb-12 px-4">
        <div className="w-full max-w-2xl bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          <div className="px-8 py-6 border-b border-border bg-muted/30">
            <h1 className="text-2xl font-bold font-heading">Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm">Manage website data and configurations.</p>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Upload Parts Catalog</h2>
              <p className="text-muted-foreground text-sm">
                Upload a valid <code className="bg-muted px-1 py-0.5 rounded text-primary">parts.json</code> file to overwrite the current catalog database.
                This will update the Product Catalog page instantly.
              </p>
            </div>

            <form onSubmit={handleUpload} className="space-y-6">
              {/* Dropzone / File Input */}
              <div className="border-2 border-dashed border-border hover:border-primary/50 transition-colors rounded-xl p-8 flex flex-col items-center justify-center text-center bg-muted/10 relative">
                <input 
                  type="file" 
                  accept=".json,application/json" 
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  disabled={isUploading}
                />
                
                {file ? (
                  <div className="flex flex-col items-center">
                    <FileJson className="w-12 h-12 text-primary mb-4" />
                    <p className="font-bold text-foreground">{file.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="w-12 h-12 text-muted-foreground/50 mb-4" />
                    <p className="font-bold text-foreground">Click or drag file to this area to upload</p>
                    <p className="text-sm text-muted-foreground mt-1">Supports exactly .json format</p>
                  </div>
                )}
              </div>

              {/* Status Message */}
              {message && (
                <div className={`p-4 rounded-lg flex items-start space-x-3 ${message.type === 'success' ? 'bg-green-500/10 text-green-600 border border-green-500/20' : 'bg-red-500/10 text-red-600 border border-red-500/20'}`}>
                  {message.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                  <span className="text-sm font-medium">{message.text}</span>
                </div>
              )}

              {/* Action */}
              <div className="flex justify-end mt-8 pt-6 border-t border-border">
                <button 
                  type="submit" 
                  disabled={!file || isUploading}
                  className="bg-primary hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground px-6 py-3 rounded-lg font-bold flex items-center transition-all"
                >
                  {isUploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                      Uploading...
                    </>
                  ) : (
                    "Upload Catalog Data"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

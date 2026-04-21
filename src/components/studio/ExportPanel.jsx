import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileImage, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ExportPanel({ processedUrl, format }) {
  const handleDownload = async (fileType) => {
    if (!processedUrl) return;
    const response = await fetch(processedUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `studioone-${format || 'photo'}.${fileType}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border/50 bg-card/40 p-6"
    >
      <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">Export</label>

      <div className="space-y-3">
        <Button
          onClick={() => handleDownload('png')}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium justify-start gap-3"
        >
          <FileImage className="w-4 h-4" />
          Download PNG
          <span className="ml-auto text-xs opacity-70">High Quality</span>
        </Button>

        <Button
          onClick={() => handleDownload('jpg')}
          variant="outline"
          className="w-full border-border/60 text-foreground hover:bg-secondary justify-start gap-3"
        >
          <FileImage className="w-4 h-4" />
          Download JPG
          <span className="ml-auto text-xs text-muted-foreground">Smaller File</span>
        </Button>

        <Button
          variant="outline"
          className="w-full border-border/60 text-foreground hover:bg-secondary justify-start gap-3"
          disabled
        >
          <Grid3X3 className="w-4 h-4" />
          Print-Ready Sheet
          <span className="ml-auto text-xs text-primary">Pro</span>
        </Button>
      </div>
    </motion.div>
  );
}
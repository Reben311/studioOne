# StudioOne - AI Photo Studio

A React-based AI photo studio application that transforms selfies into professional ID photos using advanced image processing.

## Features

- AI-powered photo enhancement
- Multiple ID photo formats (1x1, 2x2, passport, resume, profile)
- Professional background options
- Outfit enhancement
- Real-time processing with progress indicators
- Export functionality

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## API Endpoints

The app includes serverless API endpoints for:

- `POST /api/upload` - File upload handling
- `POST /api/analyze` - Photo quality analysis
- `POST /api/generate` - AI image generation

## Deployment to Vercel

### 1. Connect to Vercel

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will auto-detect the Vite configuration

### 2. Environment Variables

Add these environment variables in your Vercel dashboard:

```bash
# Required for AI services
OPENAI_API_KEY=your_openai_api_key

# Optional: Alternative AI services
GOOGLE_CLOUD_VISION_API_KEY=your_google_api_key
REPLICATE_API_TOKEN=your_replicate_token

# Required for file storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### 3. Deploy

Vercel will automatically:
- Install dependencies
- Build the app with `npm run build`
- Deploy the API routes
- Set up the SPA routing

## Production Setup

### AI Services Integration

The API endpoints are ready to integrate with real AI services:

#### Image Analysis
- **OpenAI Vision**: Replace the mock analysis with GPT-4 Vision API calls
- **Google Cloud Vision**: Use Google's pre-trained models for image analysis
- **AWS Rekognition**: Amazon's image recognition service

#### Image Generation
- **OpenAI DALL-E 3**: High-quality image generation
- **Midjourney API**: Artistic image generation
- **Stable Diffusion**: Open-source image generation via Replicate/Together AI

#### File Storage
- **Cloudinary**: Image upload, optimization, and CDN
- **AWS S3**: Scalable cloud storage
- **Vercel Blob**: Serverless blob storage

### Example OpenAI Integration

```javascript
// In api/analyze.js
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'gpt-4-vision-preview',
    messages: [{
      role: 'user',
      content: [
        { type: 'text', text: 'Analyze this photo for professional quality...' },
        { type: 'image_url', image_url: { url: image_url } }
      ]
    }]
  })
});
```

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Radix UI
- React Router
- TanStack Query

## Project Structure

```
src/
+-- api/           # API client and utilities
+-- components/    # Reusable UI components
¦   +-- landing/   # Landing page components
¦   +-- studio/    # Studio page components
¦   +-- ui/        # Base UI components
+-- hooks/         # Custom React hooks
+-- lib/           # Utilities and context
+-- pages/         # Page components
+-- utils/         # Helper functions
api/               # Vercel serverless functions
+-- upload.js      # File upload endpoint
+-- analyze.js     # Photo analysis endpoint
+-- generate.js    # Image generation endpoint
```

## License

MIT License

# Image & Video Placeholder Guide

This guide explains how to replace placeholder references with your actual media files.

## Image Files (pic1.jpg to pic48.jpg)

Replace these placeholder references with your actual tourism images:

### Home Page Images
- `pic1.jpg` - Mountain Gorillas (Volcanoes National Park)
- `pic2.jpg` - Lake Kivu
- `pic3.jpg` - Cultural Heritage/Traditional Village
- `pic4.jpg` - Volcanoes National Park (Featured)
- `pic5.jpg` - Lake Kivu Scenic View
- `pic6.jpg` - Nyungwe Forest
- `pic7.jpg` - Akagera National Park Safari
- `pic8.jpg` - Safety/Security Image
- `pic9.jpg` - Local People/Hospitality
- `pic10.jpg` - Luxury Accommodation
- `pic11.jpg` - Company/Team Image
- `pic12.jpg` - Mission Image
- `pic13.jpg` - Vision Image
- `pic14.jpg` - Experience/Expertise
- `pic15.jpg` - Expert Guides
- `pic16.jpg` - Customized Tours
- `pic17.jpg` - Sustainability/Nature
- `pic18.jpg` - Safety/Transport
- `pic19.jpg` - Value/Accommodation
- `pic20.jpg` - Founder/CEO Portrait
- `pic21.jpg` - Operations Manager Portrait
- `pic22.jpg` - Head Guide Portrait
- `pic23.jpg` - Gorilla Trekking Tour
- `pic24.jpg` - Safari Tour
- `pic25.jpg` - Lake Tours
- `pic26.jpg` - Forest Hikes
- `pic27.jpg` - Cultural Tours
- `pic28.jpg` - Accommodation/Hotels
- `pic29.jpg` - Private Tours/Vehicles
- `pic30.jpg` - Photography Tours
- `pic31.jpg` - Budget Package Destination
- `pic32.jpg` - Standard Adventure Destination
- `pic33.jpg` - Premium Luxury Destination
- `pic34.jpg` - Mountain Gorilla (Gallery)
- `pic35.jpg` - Volcanoes at Sunrise
- `pic36.jpg` - Lake Kivu Beauty
- `pic37.jpg` - Akagera Wildlife
- `pic38.jpg` - Nyungwe Forest Details
- `pic39.jpg` - Thousand Hills Landscape
- `pic40.jpg` - Local Community
- `pic41.jpg` - Adventure Activity
- `pic42.jpg` - Safari Moment
- `pic43.jpg` - Gorilla Conservation
- `pic44.jpg` - Lake Kivu Adventure
- `pic45.jpg` - Rwandan Food/Cuisine
- `pic46.jpg` - Birds/Birdwatching
- `pic47.jpg` - Kigali City
- `pic48.jpg` - Travel Tips/Maps

### Special Images
- `hero.jpg` - Hero background image for all pages

## Video Files (vid1.mp4 to vid3.mp4)

Video files for multimedia content:

- `vid1.mp4` - Gorilla Trek Adventure (Featured on Home & Gallery)
- `vid2.mp4` - Safari Discovery (Gallery Page)
- `vid3.mp4` - Lake Kivu Experience (Gallery Page)

## Directory Structure

```
assets/
├── pic1.jpg
├── pic2.jpg
├── ...
├── pic48.jpg
├── vid1.mp4
├── vid2.mp4
├── vid3.mp4
├── hero.jpg
└── (other media files)
```

## How to Add Images & Videos

1. **Prepare your media files** (JPG, PNG for images; MP4 for videos)
2. **Place files in the `assets/` folder**
3. **Files are already referenced** in the HTML pages as `pic1.jpg`, `pic2.jpg`, etc.
4. **No code changes needed** - just drop files in the assets folder

## Image Recommendations

- **Dimensions:** 
  - Gallery images: 1200x800px (landscape)
  - Portrait images: 600x800px
  - Featured images: 800x600px
  
- **File Size:** Keep under 500KB for web optimization
- **Format:** JPG for photos, PNG for graphics with transparency
- **Quality:** 72-96 DPI for web

## Video Recommendations

- **Codec:** H.264 video codec with AAC audio
- **Dimensions:** 1280x720px (720p) or higher
- **Bitrate:** 2-5 Mbps for good quality
- **File Size:** Keep under 50MB for web
- **Format:** MP4 container

## Example Image Descriptions

**pic1.jpg - Mountain Gorillas:**
- Content: Close-up of mountain gorillas in Volcanoes National Park
- Usage: Home page quick stats card

**pic4.jpg - Volcanoes at Sunrise:**
- Content: Beautiful sunrise over volcanic landscape
- Usage: Featured destinations carousel

**pic34.jpg - Gorilla Gallery:**
- Content: High-quality gorilla photo for gallery
- Usage: Gallery section click-to-zoom

## Notes

- The website is styled to accommodate any image dimensions
- Images automatically scale to fit containers
- Aspect ratios are maintained with `object-fit: cover`
- Mobile optimization is built-in
- No image processing needed - the CSS handles responsiveness

---

**Replace all placeholder image and video references with actual tourism content for production use.**

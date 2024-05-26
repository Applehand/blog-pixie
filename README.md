# Blog Image Editing Tool 
## P.I.X.I.E:
- Practical Image eXchange with Instant Editing

## Development
**Dependencies**
- Node.js
**Running Locally**
To get running locally, jump into your terminal:
```
git clone https://github.com/Applehand/blog-pixie.git
cd blog-pixie
npm install
npm start
```

## Tech

- React

## Functional requirements:

- Upload image
- Crop image
- Lock aspect ratio
- Resize image
- Rename image during export
- An x button to clear current image

## Workflow/UX

- User drags and drops an image onto a large rectangle container
- The image appears within the image container
- If toggled, A draggable cropping rectangle appears within the image container
- The following reactive values populate within inputs below the image container:
    - Current Image Dimensions
    - Cropping Rectangle Dimensions
    - Aspect Ratio
- User inputs target dimensions by dragging the rectangle, or editing text fields
- User names the final file name
- User exports final image

## Inputs/Variables

- Image Width
- Image Height
- Aspect Ratio
- Crop PosX
- Crop PosY
- Crop Width
- Crop Height
- Export File Name

## React Components?

- Header
- PIXIE
    - Image Container
        - Image Upload
            - Drag n Drop
        - Cropper
    - Inputs Container
    - Image Export 
- Footer

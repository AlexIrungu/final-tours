import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function importAllMedia(r) {
    let images = [];
    r.keys().forEach((item, index) => {
        images.push(r(item));
    });
    console.log("Imported media paths:", images); // Log imported media paths
    return images;
}

function importAllMediaAsObject(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        // Remove the './' from the beginning of the filename and use it as the key
        images[item.replace('./', '')] = r(item);
    });
    console.log("Imported media paths:", images); // Log imported media paths
    return images;
}

// New utility function for combining class names
function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export { importAllMedia, importAllMediaAsObject, cn }
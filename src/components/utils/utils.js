// utils.js
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

export { importAllMedia, importAllMediaAsObject }
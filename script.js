document.addEventListener("DOMContentLoaded", function () {
    const canvas = new fabric.Canvas('canvas');

    // Add Text
    document.getElementById('add-text').addEventListener('click', () => {
        const text = new fabric.IText('New Text', {
            left: 100,
            top: 100,
            fontSize: 24,
            fill: '#000'
        });
        canvas.add(text);
    });

    // Add Shape
    document.getElementById('add-shape').addEventListener('click', () => {
        const rectangle = new fabric.Rect({
            left: 150,
            top: 150,
            width: 100,
            height: 100,
            fill: 'blue'
        });
        canvas.add(rectangle);
    });

    // Upload Image
    document.getElementById('upload-image').addEventListener('change', (e) => {
        const reader = new FileReader();
        reader.onload = function (event) {
            fabric.Image.fromURL(event.target.result, (img) => {
                img.scaleToWidth(200);
                img.left = 100;
                img.top = 100;
                canvas.add(img);
            });
        };
        reader.readAsDataURL(e.target.files[0]);
    });

    // Download Canvas as Image
    document.getElementById('download').addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'design.png';
        link.href = canvas.toDataURL({
            format: 'png',
            quality: 0.8
        });
        link.click();
    });
});

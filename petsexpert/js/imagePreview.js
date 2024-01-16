function imagePreview({ input_file_id, label_id, active_class }) {
	const fileImage = document.querySelector(input_file_id);
	const filePreview = document.querySelector(label_id);

	fileImage.onchange = function () {
		const reader = new FileReader();

		reader.onload = function (e) {
			// get loaded data and render thumbnail.
			filePreview.style.backgroundImage = "url(" + e.target.result + ")";
			filePreview.classList.add(active_class);
		};

		// read the image file as a data URL.
		reader.readAsDataURL(this.files[0]);
	};
}

//* при необходимости можно вынести эту часть в компонент где используется превью картинки 
imagePreview({
	input_file_id: '.input-preview__src',
	label_id: '.input-preview',
	active_class: 'has-image',
});
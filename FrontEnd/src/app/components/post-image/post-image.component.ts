import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {
	postImageForm: FormGroup = this.builder.group({
		title: new FormControl('', [
			Validators.required
		]),
		tagInput: new FormControl('', [
			Validators.required
		]),
		tags: new FormArray([]),
	});

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }

	postImage(){
		console.log(this.postImageForm.value);
	}

	addTag(){
		let value = this.postImageForm.value.tagInput;
		if(value != '') this.postImageForm.controls.tags['controls'].push(new FormControl(value));
		this.postImageForm.controls.tagInput.setValue('');

		console.log(this.postImageForm.controls.tags['controls']);
	}

}

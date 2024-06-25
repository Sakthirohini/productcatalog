import { Component } from '@angular/core';
import { take } from 'rxjs';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  pname: string = '';
  pDescription: string = '';
  pPrice: any = '';
  pCategory: string = '';
  pQuantity: any = '';
  pImage: any ='';
  isEdit: boolean = false;
  errorMessage: string = '';
  pid: any = '';
  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute
  )
    {
      this.activatedRoute.queryParams.subscribe((res: any) => {
        console.log('>>>>>>>>', res);
        if (res && res?.pid) {
          this.isEdit = true;
          this.getProductById(res?.pid);
        }
      })
    } 

  getProductById(id: any): void {
    this.service.getProductById(id).pipe(take(1)).subscribe((res) => {
      if(res && res?.pid) {
        console.log('>>>>>', res);
        this.pid = res?.pid;
        this.pname = res?.pname;
        this.pCategory = res?.pCategory;
        this.pDescription = res?.pDescription;
        this.pImage = res?.pImage;
        this.pPrice = res?.pPrice;
        this.pQuantity = res?.pQuantity;
      }
    });
  }
  addUpdateProudcut(): any  {
    console.log('hii');
  if (this.pname === '') {
    this.errorMessage = 'Product name should not be blank';
    document.getElementById('errordiv')?.scrollIntoView(true);
    return;
  }

  if (this.pDescription === '') {
    this.errorMessage = 'Product Description should not be blank';
    document.getElementById('errordiv')?.scrollIntoView(true);
    return;
  }

  if (this.pPrice === '') {
    this.errorMessage = 'Product Price should not be blank';
    document.getElementById('errordiv')?.scrollIntoView(true);
    return;
  }

  if (this.pCategory === '') {
    this.errorMessage = 'Product Category should not be blank';
    document.getElementById('errordiv')?.scrollIntoView(true);
    return;
  }

  if (this.pQuantity === '') {
    this.errorMessage = 'Product Quantity should not be blank';
    document.getElementById('errordiv')?.scrollIntoView(true);
    return;
  }

  if (this.pImage === '') {
    this.errorMessage = 'Product Image URL should not be blank';
    document.getElementById('errordiv')?.scrollIntoView(true);
    return;
  }

  const body: any = {
    pname: this.pname,
    pDescription: this.pDescription,
    pPrice:this.pPrice,
    pCategory:this.pCategory,
    pQuantity:this.pQuantity,
    pImage:this.pImage
  };
  if (!this.isEdit) {
    this.service.addProduct(body).pipe(take(1)).subscribe((res: any) => {
      console.log('>>>>>>>>>>>>>>>>', res);
      if (res && res === 'Product added successfully') {
        alert('Product Added successfully');
        this.service.navigateToLink('listproduct');
      }
    });
  } else {
    body.pid = this.pid;
    this.service.updateProduct(body).subscribe((res: any) => {
      console.log("###",res);
      if (res && res?.pid) {
        alert("Product Updated successfully");
        this.service.navigateToLink('listproduct');
      }
    });
  }
  
}
}

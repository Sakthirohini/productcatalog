import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css'
})
export class ListproductComponent {

  allproduct: any[] = [];
  constructor(
    private service: ProductService,
    private router:Router
  ) {
    this.getAllProduct();
  }
 
  
    getAllProduct(): void {
      this.service.getAllProduct().pipe(take(1)).subscribe((res: any) => {
          this.allproduct = res;
          console.log('Products:', res);
      });
    }

    onDelete(product: any) : void {
      this.service.deleteProductById(product?.pid).subscribe((res: any) => {
        console.log('>>>>>>>>>>>>>>>>', res);
        if (res && res === 'product deleted successfully') {
          console.log('>>>>>>>>>>>>>>>>', res);
          alert("Product Deleted successfully");
          this.service.navigateToLink('listproduct');
        }
      })
    }

    onEdit(product: any) : void {
      console.log('####', product?.pid);
      this.router.navigate(['/addproduct'],{ queryParams: { pid: product?.pid}});
      console.log('update');
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../../../core/services/master.service';
import { OrderDetails } from '../../../user/models/order.model';
import { UserOrder } from '../../../user/models/userOrder.model';
import { FoodCombo } from '../../models/combo.model';
import { FoodItems } from '../../models/foodItems.model';
import { MatDialog } from '@angular/material/dialog';
import { OrderProcessingComponent } from '../order-processing/order-processing.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css',
})
export class OrderDetailsComponent implements OnInit {
  orderId!: string;
  userName: string = '';
  order!: UserOrder;
  orderedCombos!: any[];
  orderedItems!: any[];
  foodCombos: FoodCombo[] = [];
  foodItems: FoodItems[] = [];
  orderAccepted: boolean = false;
  decorationOption!:string;

  constructor(
    private route: ActivatedRoute,
    private masterService: MasterService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = params['orderId'];
    });

    this.loadOrder();
  }

  loadOrder() {
    this.masterService.getOrderById(this.orderId).subscribe({
      next: (response) => {
        console.log(response);
        this.order = response;
        this.orderedCombos = response.orderedCombos;
        this.orderedItems = response.orderedItems;
        for (const orderedCombo of this.orderedCombos) {
          this.foodCombos.push(orderedCombo.foodCombos);
        }
        for (const orderedItem of this.orderedItems) {
          this.foodItems.push(orderedItem.foodItems);
        }
      },
    });
  }


  acceptOrder(){
    this.masterService.acceptOrder(this.orderId).subscribe({next:(response)=>{
      this.orderAccepted = true;
      
    }})
  }


  processOrder(id: any){
    this.openPopup(id);

  }

  openPopup(orderId: any) {
    var _popup = this.dialog.open(OrderProcessingComponent, {
      width: '60%',
      data: {
        orderId: orderId,
      },
    });
    _popup.afterClosed().subscribe((data) => {
      
    });
  }
}

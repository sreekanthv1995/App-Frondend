import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AddFoodComboComponent } from './components/add-food-combo/add-food-combo.component';
import { ComboItemsComponent } from './components/combo-items/combo-items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FoodItemsComponent } from './components/food-items/food-items.component';
import { MaterialModule } from '../../shared/material/material.module';
import { AdminMenubarComponent } from './components/admin-menubar/admin-menubar.component';
import { AdminComponent } from '../../layouts/admin/components.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoriesComponent } from './components/add-categories/add-categories.component';
import { EventsComponent } from './components/events/events.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ServingTeamsComponent } from './components/team/serving-teams/serving-teams.component';
import { DecorationTeamsComponent } from './components/team/decoration-teams/decoration-teams.component';
import { AddServingTeamComponent } from './components/team/serving-teams/add-serving-team/add-serving-team.component';
import { AddServingEmployeesComponent } from './components/team/serving-teams/add-serving-employees/add-serving-employees.component';
import { AddDecorationEmployeesComponent } from './components/team/decoration-teams/add-decoration-employees/add-decoration-employees.component';
import { AddDecorationTeamComponent } from './components/team/decoration-teams/add-decoration-team/add-decoration-team.component';
import { KitchenCrewTeamsComponent } from './components/team/kitchen-crew-teams/kitchen-crew-teams.component';
import { AddKitchenCrewTeamComponent } from './components/team/kitchen-crew-teams/add-kitchen-crew-team/add-kitchen-crew-team.component';
import { AddKitchenCrewEmployeesComponent } from './components/team/kitchen-crew-teams/add-kitchen-crew-employees/add-kitchen-crew-employees.component';
import { OrderProcessingComponent } from './components/order-processing/order-processing.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AddComboPicComponent } from './components/add-food-combo/add-combo-pic/add-combo-pic.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AddFoodComboComponent,
    ComboItemsComponent,
    AddItemComponent,
    FoodItemsComponent,
    AdminMenubarComponent,
    AdminComponent,
    CategoriesComponent,
    AddCategoriesComponent,
    EventsComponent,
    AddEventComponent,
    OrderComponent,
    OrderDetailsComponent,
    ServingTeamsComponent,
    DecorationTeamsComponent,
    AddServingTeamComponent,
    AddServingEmployeesComponent,
    AddDecorationEmployeesComponent,
    AddDecorationTeamComponent,
    KitchenCrewTeamsComponent,
    AddKitchenCrewTeamComponent,
    AddKitchenCrewEmployeesComponent,
    OrderProcessingComponent,
    AdminLoginComponent,
    AddComboPicComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule,MaterialModule,],
})
export class AdminModule {}

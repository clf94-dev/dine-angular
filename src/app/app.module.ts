import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CtaComponent } from './components/cta/cta.component';
import { EventsComponent } from './components/events/events.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { HighlightsCardComponent } from './components/highlights-card/highlights-card.component';
import { TopHomeComponent } from './components/top-home/top-home.component';
import { TopReservationsComponent } from './components/top-reservations/top-reservations.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ReservationComponent } from './components/pages/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    CtaComponent,
    EventsComponent,
    FeatureCardComponent,
    FeaturesComponent,
    FooterComponent,
    FormComponent,
    HighlightsComponent,
    HighlightsCardComponent,
    TopHomeComponent,
    TopReservationsComponent,
    HomeComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

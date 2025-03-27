import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import myPreset from '../../public/myPreset';

// ECharts Configuration
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { provideHttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';

echarts.use([
  LineChart,
  BarChart, 
  TitleComponent, 
  TooltipComponent,
  ToolboxComponent,
  GridComponent, 
  LegendComponent,
  CanvasRenderer
]);

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    ConfirmationService,
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
    provideEchartsCore({ echarts }),
    provideHttpClient(),
    providePrimeNG({
      theme: { 
        preset: myPreset,
        options: {
          darkModeSelector: '.my-app-dark',
        }
      }
    }),
  ]
};

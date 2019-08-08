import {   ComponentFactoryResolver, Injectable, Inject, ReflectiveInjector, ViewContainerRef, ViewChild } from '@angular/core';
import { ConfiguracionBusquedaComponent } from 'src/app/pages/busqueda/configuracion-busqueda.component';

@Injectable({
  providedIn: 'root'
})
export class AgregarConficuracionService {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) rootViewContainer: ViewContainerRef;

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public setRootViewContainerRef(viewContainerRef) {
    
    this.rootViewContainer = viewContainerRef
  }

  public addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(ConfiguracionBusquedaComponent)
    const component = factory.create(this.rootViewContainer.parentInjector)
    
    this.rootViewContainer.insert(component.hostView)
  }
}

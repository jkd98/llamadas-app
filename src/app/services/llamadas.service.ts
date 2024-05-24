import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LlamadasService {

  private apiUrl = 'http://localhost:4000/app'; // Reemplaza con la URL de tu API

  constructor() { }

  async agregarLlamada(id: string, nuevaLlamada: any) {
    try {
      const response = await axios.post(`${this.apiUrl}/llamadas/${id}/agregar-llamada`, nuevaLlamada);
      console.log(response.data);
      return response.data;

    } catch (error) {
      console.error('Error al agregar llamada:', error);
      throw error;
    }
  }

  async listarLlamadas(id: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/llamadas/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al listar llamadas:', error);
      throw error;
    }
  }

  async modificarLlamada(id: string, llamadaId: string, nuevaInfoLlamada: any) {
    try {
      const response = await axios.put(`${this.apiUrl}/llamadas/${id}/${llamadaId}`, nuevaInfoLlamada);
      return response.data;
    } catch (error) {
      console.error('Error al modificar llamada:', error);
      throw error;
    }
  }

  async eliminarLlamada(id: string, llamadaId: string) {
    try {
      const response = await axios.delete(`${this.apiUrl}/llamadas/${id}/${llamadaId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar llamada:', error);
      throw error;
    }
  }

  async buscarLlamadas(params: any) {
    try {
      const response = await axios.get(`${this.apiUrl}/llamadas/buscar-llamadas`, { params });
      return response.data;
    } catch (error) {
      console.error('Error al buscar llamadas:', error);
      throw error;
    }
  }

  async listarTiposLlamada() {
    try {
      const response = await axios.get(`${this.apiUrl}/tipos-llamada`);
      return response.data;
    } catch (error) {
      console.error('Error al listar tipos de llamada:', error);
      throw error;
    }
  }

  async listarUsuarios() {
    try {
      const response = await axios.get(`${this.apiUrl}/usuarios/listar`);
      return response.data;
    } catch (error) {
      console.error('Error al listar tipos de llamada:', error);
      throw error;
    }
  }

  async traerUsuario(id:string) {
    try {
      const response = await axios.get(`${this.apiUrl}/usuarios/obtener/${id}`);
      //console.log(response.data);
      return response.data
    } catch (error) {
      console.error('Error al traer usuario', error);
      throw error;
    }
  }
}

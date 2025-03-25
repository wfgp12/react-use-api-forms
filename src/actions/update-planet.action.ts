import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const updatePlanetAction = async ( planet: Partial<Planet>) => {
    try {
        const res = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
        console.log('planeta actualizado');
        return res.data;
    } catch (error) {
        console.log(error);
        throw new Error('Error al actualizar planeta'); 
    }
};
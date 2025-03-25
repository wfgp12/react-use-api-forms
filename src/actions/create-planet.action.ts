import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";


export const createPlanetAction = async (planet: Partial<Planet>) => {
    try {
        const res = await planetsApi.post<Planet>('/', planet);
        return res.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const createPlanetActionForm = async (_prevState: unknown, queryDate: FormData) => {
    const formData = Object.fromEntries(queryDate.entries());
    try {
        const res = await planetsApi.post<Planet>('/', formData);

        return res.data;
    } catch (error) {
        console.log(error);
        throw new Error('Error al crear planeta');
    }
};
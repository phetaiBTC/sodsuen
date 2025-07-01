import { storeUnit } from "../store"
import { storeToRefs } from 'pinia';
import api from "@/plugins/axios";
import { errorM, successM } from "@/util/message.util";
export const getAllUnits = async () => {
    const { unitList, loading } = storeToRefs(storeUnit());
    loading.value = true;
    await api.get('/units').then((res) => {
        loading.value = false;
        unitList.value = res.data;
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}
export const search = async (name: string) => {
    const { unitList, loading } = storeToRefs(storeUnit());
    loading.value = true;
    await api.get('/units/search', { params: { name } }).then((res) => {
        unitList.value = res.data;
        loading.value = false;
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const createUnit = async (data: { name: string, symbol: string, description: string }) => {
    const { loading } = storeToRefs(storeUnit());
    loading.value = true;
    await api.post('/units', data).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllUnits()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const deleteUnit = async (id: number) => {
    const { loading } = storeToRefs(storeUnit());
    loading.value = true;
    await api.delete(`/units/${id}`).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllUnits()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const updateUnit = async (id: number, data: { name: string, symbol: string, description: string }) => {
    const { loading } = storeToRefs(storeUnit());
    loading.value = true;
    await api.patch(`/units/${id}`, data).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllUnits()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const getUnit = async (id: number) => {
    const { loading, unit } = storeToRefs(storeUnit());
    loading.value = true;
    await api.get(`/units/${id}`).then((res) => {
        unit.value = res.data;
        loading.value = false;
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}
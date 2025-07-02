import { storeSuppliers } from "../store";
import { storeToRefs } from 'pinia';
import api from "@/plugins/axios";
import { errorM, successM } from "@/util/message.util";
import type { SupplierItem } from "../entity";
export const getAllSuppliers = async () => {
    const { supplierList, loading } = storeToRefs(storeSuppliers());
    loading.value = true;
    await api.get('/suppliers').then((res) => {
        loading.value = false;
        supplierList.value = res.data;
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}
export const searchSuppliers = async (name: string) => {
    const { supplierList, loading } = storeToRefs(storeSuppliers());
    loading.value = true;
    await api.get('/suppliers/search', { params: { name } }).then((res) => {
        supplierList.value = res.data;
        loading.value = false;
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const createSupplier = async (data:SupplierItem ) => {
    const { loading } = storeToRefs(storeSuppliers());
    loading.value = true;
    await api.post('/suppliers', data).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllSuppliers()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const deleteSupplier = async (id: number) => {
    const { loading } = storeToRefs(storeSuppliers());
    loading.value = true;
    await api.delete(`/suppliers/${id}`).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllSuppliers()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const updateSupplier = async (id: number, data: SupplierItem) => {
    const { loading } = storeToRefs(storeSuppliers());
    loading.value = true;
    await api.patch(`/suppliers/${id}`, data).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllSuppliers()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const getSupplier = async (id: number) => {
    const { loading, supplier } = storeToRefs(storeSuppliers());
    loading.value = true;
    await api.get(`/suppliers/${id}`).then((res) => {
        supplier.value = res.data;
        loading.value = false;
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const ChangeActiveSupplier = async (id: number) => {
    const { loading } = storeToRefs(storeSuppliers());
    loading.value = true;
    await api.patch(`/suppliers/is_active/${id}`).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllSuppliers()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}
import { storeCategory } from "../store";
import { storeToRefs } from 'pinia';
import api from "@/plugins/axios";
import { errorM, successM } from "@/util/message.util";
export const getAllCategories = async () => {
    const { categoryList, loading } = storeToRefs(storeCategory());
    loading.value = true;
    await api.get('/categories').then((res) => {
        loading.value = false;
        categoryList.value = res.data;
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}
export const searchCategories = async (name: string) => {
    const { categoryList, loading } = storeToRefs(storeCategory());
    loading.value = true;
    await api.get('/categories/search', { params: { name } }).then((res) => {
        categoryList.value = res.data;
        loading.value = false;
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const createCategory = async (data: { name: string, description: string }) => {
    const { loading } = storeToRefs(storeCategory());
    loading.value = true;
    await api.post('/categories', data).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllCategories()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const deleteCategory = async (id: number) => {
    const { loading } = storeToRefs(storeCategory());
    loading.value = true;
    await api.delete(`/categories/${id}`).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllCategories()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const updateCategory = async (id: number, data: { name: string, description: string }) => {
    const { loading } = storeToRefs(storeCategory());
    loading.value = true;
    await api.patch(`/categories/${id}`, data).then((res) => {
        loading.value = false;
        successM(res.data.message);
        getAllCategories()
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}

export const getCategory = async (id: number) => {
    const { loading, category } = storeToRefs(storeCategory());
    loading.value = true;
    await api.get(`/categories/${id}`).then((res) => {
        category.value = res.data;
        loading.value = false;
    }).catch((err) => {
        loading.value = false;
        errorM(err.response.data.message);
    });
}
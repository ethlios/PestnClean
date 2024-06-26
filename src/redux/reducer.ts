import { createReducer } from '@reduxjs/toolkit';
import {
    addBlogCommentSuccess,
    addBlogSuccess,
    addCart,
    addFeedbackSuccess,
    addOrderSuccess,
    addProductSuccess,
    deleteBlogCommentSuccess,
    deleteFeedbackSuccess,
    getAdminOrder,
    getBlog,
    getBlogComment,
    getBlogPageSuccess,
    getButton,
    getCart,
    getEmail,
    getFeedback,
    getOrderSuccess,
    getProduct,
    getProductPageSuccess,
    orderBehavior,
    removeBlogSuccess,
    removeCart,
    removeCartAll,
    removeEmailSuccess,
    removeOrderSuccess,
    removeProductSuccess,
    signIn,
    updateBlogSuccess,
    updateOrderSuccess,
    updateProductSuccess,
    addEmailFail,
    addEmailSuccess,
    removeEmailFail,
    clearMessage,
    addImgWorkSuccess,
    addImgWorkFail,
    getImgWork,
    getDiscount,
    getAllProducts,
    deleteImgWorkSuccess,
    deleteImgWorkFail,
    updateImgWorkSuccess,
    updateImgWorkFail,
    addNotificationSuccess,
    addNotificationFail,
    getAllNotificationsByIdSuccess,
    getAllNotificationsByIdFail,
    addDiscountSuccess,
    removeDiscountSuccess,
    getProvince,
    updateStatusDiscountSuccess,
    updateDiscountSuccess,
    addCheckboxFilterProductPage,
    saveDataOrder,
    getAllBlogs,
} from './actions';

interface RootState {
    buttons: any[];
    login: boolean;
    sign: boolean;
    products: any[];
    blogs: any[];
    cart: any[];
    productsPage: any[];
    imageWork: any[];
    blogsPage: any[];
    order: any[];
    adminOrder: any[];
    orderBehavior: string;
    feedback: any[];
    blogCmt: any[];
    emails: any[];
    message: string;
    notification: any[];
    discount: any[];
    allProducts: any[];
    allBlogs: any[];
    users: any[];
    notificationAll: any[];
    province: any[];
    checkboxFilterProductPage: any[];
    infoOrder: any;
}

const initState: RootState = {
    buttons: [],
    login: false,
    sign: false,
    products: [],
    blogs: [],
    cart: [],
    productsPage: [],
    imageWork: [],
    blogsPage: [],
    order: [],
    adminOrder: [],
    orderBehavior: '0',
    feedback: [],
    blogCmt: [],
    emails: [],
    message: '',
    notification: [],
    discount: [],
    allProducts: [],
    allBlogs: [],
    users: [],
    notificationAll: [],
    province: [],
    checkboxFilterProductPage: [],
    infoOrder: {},
};

const findIndex = (state: any[], id: number) => {
    let index = -1;
    state.filter((item, ind) => {
        return item.id === id ? (index = ind) : -1;
    });
    return index;
};

const findIndex2 = (cart: any, id: number) => {
    let number = -1;
    const index = cart.filter((item: any, index: number) => {
        if (item.id === id) {
            number = index;
            return number;
        }
    });

    return number;
};

const rootReducer = createReducer(initState, (builder) => {
    builder.addCase(getButton, (state, action) => {
        state.buttons = action.payload;
    });
    builder.addCase(signIn, (state, action) => {
        state.sign = action.payload;
    });
    builder.addCase(getProductPageSuccess, (state, action) => {
        state.productsPage = action.payload;
    });
    builder.addCase(getBlogPageSuccess, (state, action) => {
        state.blogsPage = action.payload;
    });
    builder.addCase(orderBehavior, (state, action) => {
        state.orderBehavior = action.payload;
    });

    // All Prodcut
    builder.addCase(getAllProducts, (state, action) => {
        state.allProducts = action.payload;
    });

    // All Blog
    builder.addCase(getAllBlogs, (state, action) => {
        state.allBlogs = action.payload;
    });

    // Orther
    builder.addCase(getFeedback, (state, action) => {
        state.feedback = action.payload;
    });

    builder.addCase(addFeedbackSuccess, (state, action) => {
        state.feedback.push(action.payload);
    });

    builder.addCase(deleteFeedbackSuccess, (state, action) => {
        const index = findIndex(state.feedback, action.payload);
        state.feedback.splice(index, 1);
    });
    builder.addCase(getProvince, (state, action) => {
        state.province = action.payload;
    });
    //////////////////////////////////////////

    builder.addCase(getBlogComment, (state, action) => {
        state.blogCmt = action.payload;
    });

    builder.addCase(addBlogCommentSuccess, (state, action) => {
        state.blogCmt.push(action.payload);
    });

    builder.addCase(deleteBlogCommentSuccess, (state, action) => {
        const index = findIndex(state.blogCmt, action.payload);
        state.blogCmt.splice(index, 1);
    });

    // Product

    builder.addCase(addProductSuccess, (state, action) => {
        state.allProducts.push(action.payload);
    });

    builder.addCase(removeProductSuccess, (state, action) => {
        const index = findIndex(state.allProducts, action.payload);
        state.allProducts.splice(index, 1);
    });

    builder.addCase(updateProductSuccess, (state, action) => {
        const index: number = findIndex(state.allProducts, action.payload.id);
        state.allProducts[index] = action.payload;
    });

    // Blog

    builder.addCase(addBlogSuccess, (state, action) => {
        state.allBlogs.push(action.payload);
    });

    builder.addCase(removeBlogSuccess, (state, action) => {
        const index = findIndex(state.allBlogs, action.payload);
        state.allBlogs.splice(index, 1);
    });

    builder.addCase(updateBlogSuccess, (state, action) => {
        const index: number = findIndex(state.allBlogs, action.payload.id);
        state.allBlogs[index] = action.payload;
    });

    // Cart
    builder.addCase(getCart, (state, action) => {
        state.cart = action.payload;
    });
    builder.addCase(addCart, (state, action) => {
        if (action.payload.length > 0) {
            state.cart = [...state.cart, ...action.payload];
        } else {
            state.cart.push(action.payload);
        }
    });
    builder.addCase(removeCart, (state, action) => {
        const index = findIndex2(state.cart, action.payload);
        state.cart.splice(index, 1);
    });
    builder.addCase(saveDataOrder, (state, action) => {
        const { data } = action.payload;
        state.infoOrder = data;
    });

    builder.addCase(removeCartAll, (state, action) => {
        const newCart = state.cart.filter((cart: any) => cart.id !== action.payload);
        state.cart = newCart;
        if (newCart.length === 0) {
            localStorage.removeItem('huonghai-cart');
        }
    });

    // Order
    builder.addCase(getAdminOrder, (state, action) => {
        state.adminOrder = action.payload;
    });

    builder.addCase(getOrderSuccess, (state, action) => {
        state.order = action.payload;
    });

    builder.addCase(addOrderSuccess, (state, action) => {
        state.order.push(action.payload);
    });

    builder.addCase(removeOrderSuccess, (state, action) => {
        const index = findIndex(state.order, action.payload);
        state.order.splice(index, 1);
    });

    builder.addCase(updateOrderSuccess, (state, action) => {
        const index: number = findIndex(state.order, action.payload.id);
        state.order[index] = action.payload;
    });

    // Email
    builder.addCase(getEmail, (state, action) => {
        state.emails = action.payload;
    });
    // remove email
    builder.addCase(removeEmailSuccess, (state, action) => {
        const { message, data } = action.payload;
        const index = state.emails.findIndex((email) => email.id === data.id);
        state.emails.splice(index, 1);
        state.message = message;
    });
    builder.addCase(removeEmailFail, (state, action) => {
        const { message } = action.payload;
        state.message = message;
    });
    //  add email
    builder.addCase(addEmailSuccess, (state, action) => {
        const { message, data } = action.payload;
        state.message = message;
        state.emails.push(data);
    });
    builder.addCase(addEmailFail, (state, action) => {
        const { message } = action.payload;
        state.message = message;
    });
    // IMG WORK
    builder.addCase(getImgWork, (state, action) => {
        state.imageWork = action.payload;
    });
    // Add Img Work
    builder.addCase(addImgWorkSuccess, (state, action) => {
        const { message, data, success } = action.payload;
        state.message = message;
        state.imageWork.push(data);
    });
    builder.addCase(addImgWorkFail, (state, action) => {
        const { message } = action.payload;
        state.message = message;
    });
    // Delete Img Work
    builder.addCase(deleteImgWorkSuccess, (state, action) => {
        const { message, data } = action.payload;
        state.message = message;
        const index = state.imageWork.findIndex((img) => img.id === data.id);
        state.imageWork.splice(index, 1);
    });
    builder.addCase(deleteImgWorkFail, (state, action) => {
        const { message } = action.payload;
        state.message = message;
    });
    // Update Img Work
    builder.addCase(updateImgWorkSuccess, (state, action) => {
        const { message, data } = action.payload;
        state.message = message;
        // Tìm chỉ mục của phần tử cần cập nhật trong mảng
        const index = state.imageWork.findIndex((img) => img.id === data.id);
        if (index !== -1) {
            // Kiểm tra xem phần tử có tồn tại trong mảng không
            // Cập nhật phần tử tại chỉ mục index bằng dữ liệu mới từ action.payload.data
            state.imageWork[index] = data;
        }
    });
    builder.addCase(updateImgWorkFail, (state, action) => {
        const { message } = action.payload;
        state.message = message;
    });

    // Message
    builder.addCase(clearMessage, (state, action) => {
        state.message = '';
        state.orderBehavior = '';
    });

    // NOTIFICATIONS
    builder.addCase(addNotificationSuccess, (state, action) => {
        const { message } = action.payload;
        state.message = message;
    });
    builder.addCase(addNotificationFail, (state, action) => {
        const { message } = action.payload;
        state.message = message;
    });
    builder.addCase(getAllNotificationsByIdSuccess, (state, action) => {
        const { message, data } = action.payload;
        state.notificationAll = data;
        state.message = message;
    });
    builder.addCase(getAllNotificationsByIdFail, (state, action) => {
        const { message } = action.payload;
        state.message = message;
    });

    // Discount
    builder.addCase(getDiscount, (state, action) => {
        state.discount = action.payload;
    });
    builder.addCase(addDiscountSuccess, (state, action) => {
        const { data, message } = action.payload;
        state.message = message;
        state.discount.push(data);
    });
    builder.addCase(updateStatusDiscountSuccess, (state, action) => {
        const { message, data } = action.payload;
        let index = state.discount.findIndex((item) => item.id === data.id);
        if (index !== -1) {
            state.discount[index].status = data.status;
        }
        state.message = message;
    });
    builder.addCase(updateDiscountSuccess, (state, action) => {
        const { message, data } = action.payload;
        let index = state.discount.findIndex((item) => item.id === data.id);
        if (index !== -1) {
            state.discount[index] = data;
        }
        state.message = message;
    });
    builder.addCase(removeDiscountSuccess, (state, action) => {
        const { data, message } = action.payload;
        const index = findIndex2(state.discount, data);
        state.discount.splice(index, 1);
        state.message = message;
    });

    //Filter Product Page
    builder.addCase(addCheckboxFilterProductPage, (state, action) => {
        state.checkboxFilterProductPage = action.payload;
    });
});

export default rootReducer;

import { createReducer } from '@reduxjs/toolkit';
import {
    addBlogCommentSuccess,
    addBlogSuccess,
    addCart,
    addFeedbackSuccess,
    addOrderSuccess,
    addProductSuccess,
    addEmail,
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
    getManagement,
    getOrder,
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
    getNotification,
    getAllProducts,
    deleteImgWorkSuccess,
    deleteImgWorkFail,
    updateImgWorkSuccess,
    updateImgWorkFail,
    getImgWorkByType,
    getUserByRule,
    addNotificationSuccess,
    addNotificationFail,
    getAllNotifications,
    getAllNotificationsByIdSuccess,
    getAllNotificationsByIdFail,
    addDiscountSuccess,
    removeDiscountSuccess,
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
    users: any[];
    notificationAll: any[];
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
    users: [],
    notificationAll: [],
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
    builder.addCase(getProduct, (state, action) => {
        state.products = action.payload;
    });

    builder.addCase(addProductSuccess, (state, action) => {
        state.products.push(action.payload);
    });

    builder.addCase(removeProductSuccess, (state, action) => {
        const index = findIndex(state.products, action.payload);
        state.products.splice(index, 1);
    });

    builder.addCase(updateProductSuccess, (state, action) => {
        const index: number = findIndex(state.products, action.payload.id);
        state.products[index] = action.payload;
    });

    // Blog
    builder.addCase(getBlog, (state, action) => {
        state.blogs = action.payload;
    });

    builder.addCase(addBlogSuccess, (state, action) => {
        state.blogs.push(action.payload);
    });

    builder.addCase(removeBlogSuccess, (state, action) => {
        const index = findIndex(state.blogs, action.payload);
        state.blogs.splice(index, 1);
    });

    builder.addCase(updateBlogSuccess, (state, action) => {
        const index: number = findIndex(state.blogs, action.payload.id);
        state.blogs[index] = action.payload;
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
    // get image work by type
    builder.addCase(getImgWorkByType, (state, action) => {
        const { message, data } = action.payload;
        state.imageWork = data;
        state.message = message;
    });
    // Message
    builder.addCase(clearMessage, (state, action) => {
        state.message = '';
    });

    // get user not admin
    builder.addCase(getUserByRule, (state, action) => {
        const payload: any = action.payload; // Sử dụng kiểu any
        if (payload && payload.message !== undefined) {
            const message = payload.message; // message có kiểu any
            const data = payload.data; // data có kiểu any
            if (data) {
                state.users = data;
            }
            state.message = message;
        }
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
    builder.addCase(getAllNotifications, (state, action) => {
        const payload: any = action.payload; // Sử dụng kiểu any
        if (payload && payload.message !== undefined) {
            const message = payload.message; // message có kiểu any
            const data = payload.data; // data có kiểu any
            if (data) {
                state.notification = data;
            }
            state.message = message;
        }
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
        state.discount.push(action.payload);
    });
    builder.addCase(removeDiscountSuccess, (state, action) => {
        const index = findIndex2(state.discount, action.payload);
        state.discount.splice(index, 1);
    });
});

export default rootReducer;

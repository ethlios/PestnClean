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
    addEmailSuccess
} from './actions';

interface RootState {
    buttons: any[];
    login: boolean;
    sign: boolean;
    products: any[];
    blogs: any[];
    cart: any[];
    productsPage: any[];
    blogsPage: any[];
    order: any[];
    adminOrder: any[];
    orderBehavior: string;
    feedback: any[];
    blogCmt: any[];
    emails: any[];
    message: string;
}

const initState: RootState = {
    buttons: [],
    login: false,
    sign: false,
    products: [],
    blogs: [],
    cart: [],
    productsPage: [],
    blogsPage: [],
    order: [],
    adminOrder: [],
    orderBehavior: '0',
    feedback: [],
    blogCmt: [],
    emails: [],
    message: ''
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
    builder.addCase(removeEmailSuccess, (state, action) => {
        const index = findIndex(state.emails, action.payload);
        state.emails.splice(index, 1);
    });
    builder.addCase(addEmailSuccess, (state, action) => {
        console.log(action.payload);
        const {message,data} = action.payload;
        state.message = message;
        state.emails.push(data);
    });
    builder.addCase(addEmailFail, (state, action) => {
        console.log(action.payload);
        const {message} = action.payload;
        state.message = message;
    });
});

export default rootReducer;

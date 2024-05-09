import { createAction } from '@reduxjs/toolkit';
import * as type from './contants';

export const getUser = createAction<any>(type.GET_USER);

export const getUserByRule = createAction<void>(type.GET_USER_BY_RULE);

export const signIn = createAction<boolean>(type.SIGN_IN);

export const getButton = createAction<any>(type.GET_BUTTON);

export const getProductPage = createAction<any>(type.GET_PRODUCT_PAGE);

export const getProductPageSuccess = createAction<any>(type.GET_PRODUCT_PAGE_SUCCESS);

export const orderBehavior = createAction<any>(type.ORDER_BEHAVIOR);

export const getBlogPage = createAction<any>(type.GET_BLOG_PAGE);

export const getBlogPageSuccess = createAction<any>(type.GET_BLOG_PAGE_SUCCESS);

export const getAllProducts = createAction<any>(type.GET_ALL_PRODUCTS);

// Update user

export const updateSessionUser = createAction<any>(type.UPDATE_SESSION_USER);

// Product
export const getProduct = createAction<any>(type.GET_PRODUCT);

export const addProduct = createAction<any>(type.ADD_PRODUCT);

export const addProductSuccess = createAction<any>(type.ADD_PRODUCT_SUCCESS);

export const removeProduct = createAction<any>(type.REMOVE_PRODUCT);

export const removeProductSuccess = createAction<any>(type.REMOVE_PRODUCT_SUCCESS);

export const updateProduct = createAction<any>(type.UPDATE_PRODUCT);

export const updateProductSuccess = createAction<any>(type.UPDATE_PRODUCT_SUCCESS);

// Blog

export const getBlog = createAction<any>(type.GET_BLOGS);

export const addBlog = createAction<any>(type.ADD_BLOGS);

export const addBlogSuccess = createAction<any>(type.ADD_BLOGS_SUCCESS);

export const removeBlog = createAction<any>(type.REMOVE_BLOGS);

export const removeBlogSuccess = createAction<any>(type.REMOVE_BLOGS_SUCCESS);

export const updateBlog = createAction<any>(type.UPDATE_BLOGS);

export const updateBlogSuccess = createAction<any>(type.UPDATE_BLOGS_SUCCESS);

// Cart

export const getCart = createAction<any>(type.GET_CART);

export const addCart = createAction<any>(type.ADD_CART);

export const addCartSuccess = createAction<any>(type.ADD_CART_SUCCESS);

export const removeCart = createAction<any>(type.REMOVE_CART);

export const removeCartSuccess = createAction<any>(type.REMOVE_CART_SUCCESS);

export const updateCart = createAction<any>(type.UPDATE_CART);

export const updateCartSuccess = createAction<any>(type.UPDATE_CART_SUCCESS);

export const removeCartAll = createAction<any>(type.REMOVE_CART_ALL);

// Management

export const getManagement = createAction<any>(type.GET_MANAGEMENT);

export const addManagement = createAction<any>(type.ADD_MANAGEMENT);

export const addManagementSuccess = createAction<any>(type.ADD_MANAGEMENT_SUCCESS);

export const removeManagement = createAction<any>(type.REMOVE_MANAGEMENT);

export const removeManagementSuccess = createAction<any>(type.REMOVE_MANAGEMENT_SUCCESS);

export const updateManagement = createAction<any>(type.UPDATE_MANAGEMENT);

export const updateManagementSuccess = createAction<any>(type.UPDATE_MANAGEMENT_SUCCESS);

// Orther
export const getFeedback = createAction<any>(type.GET_FEEDBACK);

export const addFeedback = createAction<any>(type.ADD_FEEDBACK);

export const addFeedbackSuccess = createAction<any>(type.ADD_FEEDBACK_SUCCESS);

export const deleteFeedback = createAction<any>(type.DELETE_FEEDBACK);

export const deleteFeedbackSuccess = createAction<any>(type.DELETE_FEEDBACK_SUCCESS);

export const getBlogComment = createAction<any>(type.GET_BLOG_COMMENT);

export const addBlogComment = createAction<any>(type.ADD_BLOG_COMMENT);

export const addBlogCommentSuccess = createAction<any>(type.ADD_BLOG_COMMENT_SUCCESS);

export const deleteBlogComment = createAction<any>(type.DELETE_BLOG_COMMENT);

export const deleteBlogCommentSuccess = createAction<any>(type.DELETE_BLOG_COMMENT_SUCCESS);

// Order

export const getOrder = createAction<any>(type.GET_ORDER);

export const getAdminOrder = createAction<any>(type.GET_ADMIN_ORDER);

export const getOrderSuccess = createAction<any>(type.GET_ORDER_SUCCESS);

export const addOrder = createAction<any>(type.ADD_ORDER);

export const addOrderSuccess = createAction<any>(type.ADD_ORDER_SUCCESS);

export const removeOrder = createAction<any>(type.REMOVE_ORDER);

export const removeOrderSuccess = createAction<any>(type.REMOVE_ORDER_SUCCESS);

export const updateOrder = createAction<any>(type.UPDATE_ORDER);

export const updateOrderSuccess = createAction<any>(type.UPDATE_ORDER_SUCCESS);

export const removeOrderAll = createAction<any>(type.REMOVE_ORDER_ALL);

// Email
// add email
export const addEmail = createAction<any>(type.ADD_EMAIL);
export const addEmailSuccess = createAction<any>(type.ADD_EMAIL_SUCCESS);
export const addEmailFail = createAction<any>(type.ADD_EMAIL_FAIL);

export const getEmail = createAction<any>(type.GET_EMAIL);
export const removeEmail = createAction<any>(type.REMOVE_EMAIL);
export const removeEmailSuccess = createAction<any>(type.REMOVE_EMAIL_SUCCESS);
export const removeEmailFail = createAction<any>(type.REMOVE_EMAIL_FAIL);

// Image Work
// add imageWork
export const getImgWork = createAction<any>(type.GET_IMG_WORK);
export const getImgWorkByType = createAction<any>(type.GET_IMG_WORK_BY_TYPE);
export const addImgWork = createAction<any>(type.ADD_IMG_WORK);
export const addImgWorkSuccess = createAction<any>(type.ADD_IMG_WORK_SUCCESS);
export const addImgWorkFail = createAction<any>(type.ADD_IMG_WORK_FAIL);
export const deleteImgWork = createAction<any>(type.DELETE_IMG_WORK);
export const deleteImgWorkSuccess = createAction<any>(type.DELETE_IMG_WORK_SUCCESS);
export const deleteImgWorkFail = createAction<any>(type.DELETE_IMG_WORK_FAIL);
export const updateImgWork = createAction<any>(type.UPDATE_IMG_WORK);
export const updateImgWorkSuccess = createAction<any>(type.UPDATE_IMG_WORK_SUCCESS);
export const updateImgWorkFail = createAction<any>(type.UPDATE_IMG_WORK_FAIL);

// Message
export const clearMessage = createAction<void>(type.CLEAR_MESSAGE);

// Discount
export const getDiscount = createAction<any>(type.GET_DISCOUNT);
export const addDiscount = createAction<any>(type.ADD_DISCOUNT);
export const addDiscountSuccess = createAction<any>(type.ADD_DISCOUNT_SUCCESS);
export const removeDiscountSuccess = createAction<any>(type.REMOVE_DISCOUNT_SUCCESS);
// Discount
export const getNotification = createAction<any>(type.GET_NOTIFICATION);

// NOTIFICATIONS
export const addNotification = createAction<any>(type.ADD_NOTIFICATION);
export const addNotificationSuccess = createAction<any>(type.ADD_NOTIFICATION_SUCCESS);
export const addNotificationFail = createAction<any>(type.ADD_NOTIFICATION_FAIL);
export const getAllNotifications = createAction<void>(type.GET_ALL_NOTIFICATIONS);

export const getAllNotificationsById = createAction<any>(type.GET_ALL_NOTIFICATIONS_BY_ID);
export const getAllNotificationsByIdSuccess = createAction<any>(type.GET_ALL_NOTIFICATIONS_BY_ID_SUCCESS);
export const getAllNotificationsByIdFail = createAction<any>(type.GET_ALL_NOTIFICATIONS_BY_ID_FAIL);

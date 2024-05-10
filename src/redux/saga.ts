import { call, delay, put, takeLatest } from 'redux-saga/effects';
import * as types from './contants';
import * as request from '../libs/orthers/axios';
import * as actions from './actions';

export interface ResponseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
    body?: any;
}

// Fecth Task
function* FetchUser({ payload }: any) {
    const {
        id,
        token,
        email,
        name,
        img,
    }: { id: string; token: string; email: string; name: string; img: string } = payload;
    try {
        if (id) {
            const person: ResponseGenerator = yield call(request.get, `api/user/person/${id}`, null);

            if (person.data.length === 0) {
                const createAccount: ResponseGenerator = yield call(request.post, 'api/user', {
                    id: id,
                    email,
                    name,
                    img,
                });
            }

            if (person.data.length > 0) {
                const {
                    cart,
                    product,
                    management,
                    blog,
                    order,
                    emailkm,
                    imgWork,
                    discount,
                    notification,
                    comment,
                } = person.data[0] ?? [];
                if (person.data[0].rule === 'admin') {
                    yield put(actions.getProduct(product ?? []));
                    yield put(actions.getEmail(emailkm ?? []));
                    // yield put(actions.getCart(cart ?? []));
                    yield put(actions.getManagement(management ?? []));
                    yield put(actions.getBlog(blog ?? []));
                    yield put(actions.getAdminOrder(order ?? []));
                    yield put(actions.getImgWork(imgWork ?? []));
                    yield put(actions.getDiscount(discount ?? []));
                } else {
                    yield put(actions.getManagement(management ?? []));
                    // yield put(actions.getCart(cart ?? []));
                    yield put(actions.getBlogComment(comment ?? []));
                }
            }
        }
    } catch (err) {
        console.log(err);
    }
}

// Update user
function* updateSessionUser({ payload }: any) {
    try {
        const { id, ...person }: { id: string } = payload;
        const res: ResponseGenerator = yield call(request.put, `api/user/${id}`, person);
    } catch (err) {
        console.log(err);
    }
}

// Product

function* AddProduct({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, 'api/product', payload);
        const { status, data }: ResponseGenerator = res;
        if (status === 200) {
            yield put(actions.addProductSuccess(data));
        }
    } catch (err) {
        console.log(err);
    }
}

function* RemoveProduct({ payload }: any) {
    try {
        yield put(actions.removeProductSuccess(payload));
        const res: ResponseGenerator = yield call(request.remove, `api/product/${payload}`);
        const { status, data }: ResponseGenerator = res;
    } catch (err) {
        console.log(err);
    }
}

function* UpdateProduct({ payload }: any) {
    try {
        const { id }: { id: number } = payload;

        yield put(actions.updateProductSuccess(payload));
        const res: ResponseGenerator = yield call(request.put, `api/product/${id}/put`, payload);
    } catch (err) {
        console.log(err);
    }
}

function* GetProductPage({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.get, `api/product/user/${payload}`, null);
        const { status, data }: ResponseGenerator = res;

        if (status === 200) {
            yield put(actions.getProductPageSuccess(data));
        }
    } catch (err) {
        console.log(err);
    }
}

// orther
function* AddFeedback({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, `api/comment`, payload);
        if (res.status === 200) {
            yield put(actions.addFeedbackSuccess(res.data));
        }
    } catch (err) {
        console.log(err);
    }
}

function* DeleteFeedback({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.remove, `api/comment/${payload}`);
        if (res.status === 200) {
            yield put(actions.deleteFeedbackSuccess(payload));
        }
    } catch (err) {
        console.log(err);
    }
}

// ORDER
function* AddOrder({ payload }: any) {
    try {
        yield put(actions.orderBehavior('1'));
        const res: ResponseGenerator = yield call(request.put, `api/order`, payload);

        if (res.status === 200) {
            yield delay(1000);
            yield put(actions.orderBehavior('2'));
        }
    } catch (err) {
        console.log(err);
    }
}

function* GetOrder({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.get, `api/order/user/${payload}`, null);
        const { status, data }: ResponseGenerator = res;

        if (status === 200) {
            yield put(actions.getOrderSuccess(data.order));
        }
    } catch (err) {
        console.log(err);
    }
}

function* RemoveOrder({ payload }: any) {
    try {
        const { id, idx } = payload;
        const res: ResponseGenerator = yield call(request.remove, `api/order/${id}`);
        const { status, data }: ResponseGenerator = res;
        if (status === 200) {
            yield put(actions.removeOrderSuccess(idx));
        }
    } catch (err) {
        console.log(err);
    }
}

function* UpdateOrder({ payload }: any) {
    try {
        const { id }: { id: number } = payload;

        yield put(actions.updateOrderSuccess(payload));
        const res: ResponseGenerator = yield call(request.put, `api/order/${id}/put`, payload);
    } catch (err) {
        console.log(err);
    }
}

// BLOG

function* GetBlogPage({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.get, `api/blog/user/${payload}`, null);
        const { status, data }: ResponseGenerator = res;

        if (status === 200) {
            yield put(actions.getBlogPageSuccess(data));
        }
    } catch (err) {
        console.log(err);
    }
}

function* AddBlogs({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, 'api/blog', payload);
        const { status, data }: ResponseGenerator = res;
        if (status === 200) {
            yield put(actions.addBlogSuccess(data));
        }
    } catch (err) {
        console.log(err);
    }
}

function* RemoveBlogs({ payload }: any) {
    try {
        yield put(actions.removeBlogSuccess(payload));
        const res: ResponseGenerator = yield call(request.remove, `api/blog/${payload}`);
        const { status, data }: ResponseGenerator = res;
    } catch (err) {
        console.log(err);
    }
}

function* UpdateBlogs({ payload }: any) {
    try {
        const { id }: { id: number } = payload;

        yield put(actions.updateBlogSuccess(payload));
        const res: ResponseGenerator = yield call(request.put, `api/blog/${id}/put`, payload);
    } catch (err) {
        console.log(err);
    }
}

function* AddBlogsComment({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, `api/cmtblog`, payload);
        if (res.status === 200) {
            yield put(actions.addBlogCommentSuccess(res.data));
        }
    } catch (err) {
        console.log(err);
    }
}

function* DeleteBlogsComment({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.remove, `api/cmtblog/${payload}`);
        if (res.status === 200) {
            yield put(actions.deleteBlogCommentSuccess(payload));
        }
    } catch (err) {
        console.log(err);
    }
}

// Email
function* AddEmail({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, 'api/email', payload);
        if (res.status === 200) {
            yield put(actions.addEmailSuccess(res.data));
        } else {
            throw new Error(`Unexpected status code: ${res.status}`);
        }
    } catch (err: any) {
        if (err.response && err.response.status === 400) {
            yield put(actions.addEmailFail(err.response.data));
        } else {
            console.log(err);
        }
    }
}

function* DeleteEmail({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, 'api/email/remove', payload);
        if (res.status === 200) {
            yield put(actions.removeEmailSuccess(res.data));
        } else {
            throw new Error(`Unexpected status code: ${res.status}`);
        }
    } catch (err: any) {
        if (err.response && err.response.status === 400) {
            yield put(actions.removeEmailFail(err.response.data));
        } else {
            console.log(err);
        }
    }
}

// IMAGE WORK
function* CreateImgWork({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, 'api/imagework/create', payload);
        if (res.status === 200) {
            yield put(actions.addImgWorkSuccess(res.data));
        } else {
            throw new Error(`Unexpected status code: ${res.status}`);
        }
    } catch (err: any) {
        if (err.response && err.response.status === 400) {
            yield put(actions.addImgWorkFail(err.response.data));
        } else {
            console.log(err);
        }
    }
}

function* DeleteImgWork({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, 'api/imagework/delete', payload);
        if (res.status === 200) {
            yield put(actions.deleteImgWorkSuccess(res.data));
        } else {
            throw new Error(`Unexpected status code: ${res.status}`);
        }
    } catch (err: any) {
        if (err.response && err.response.status === 400) {
            yield put(actions.deleteImgWorkFail(err.response.data));
        } else {
            console.log(err);
        }
    }
}

function* UpdateImgWork({ payload }: any) {
    try {
        const { id } = payload;
        const res: ResponseGenerator = yield call(request.put, `api/imagework/${id}`, payload);
        if (res.status === 200) {
            yield put(actions.updateImgWorkSuccess(res.data));
        } else {
            throw new Error(`Unexpected status code: ${res.status}`);
        }
    } catch (err: any) {
        if (err.response && err.response.status === 400) {
            yield put(actions.updateImgWorkFail(err.response.data));
        } else {
            console.log(err);
        }
    }
}

function* GetImageWorkByType({ payload }: any) {
    try {
        const { id } = payload;
        if (id !== undefined) {
            const res: ResponseGenerator = yield call(request.get, `api/imagework/type/${id}`, payload);
            if (res.status === 200) {
                yield put(actions.getImgWorkByType(res.data));
            } else {
                throw new Error(`Unexpected status code: ${res.status}`);
            }
        }
    } catch (err: any) {
        console.log(err);
    }
}

// get all user not admin
function* GetUserByRule({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.get, 'api/user/all/ruleUser', null);
        if (res.status === 200) {
            yield put(actions.getUserByRule(res.data));
        } else {
            throw new Error(`Unexpected status code: ${res.status}`);
        }
    } catch (err: any) {
        console.log(err);
    }
}

// NOTIFICATIONS
function* AddNotify({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, 'api/notification', payload);
        if (res.status === 200) {
            yield put(actions.addNotificationSuccess(res.data));
        } else {
            throw new Error(`Unexpected status code: ${res.status}`);
        }
    } catch (err: any) {
        if (err.response && err.response.status === 400) {
            yield put(actions.addNotificationFail(err.response.data));
        } else {
            console.log(err);
        }
    }
}

function* GetAllNotificationsById({ payload }: any) {
    try {
        if (payload.id !== undefined) {
            const res: ResponseGenerator = yield call(request.get, `api/notification/${payload.id}`, null);
            if (res.status === 200) {
                yield put(actions.getAllNotificationsByIdSuccess(res.data));
            } else {
                throw new Error(`Unexpected status code: ${res.status}`);
            }
        }
    } catch (err: any) {
        if (err.response && err.response.status === 400) {
            yield put(actions.getAllNotificationsByIdFail(err.response.data));
        } else {
            console.log(err);
        }
    }
}

function* AddDiscount({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.post, `api/discount`, payload);

        const { data, status } = res;
        if (status === 200) {
            yield put(actions.addDiscountSuccess(data));
        }
    } catch (err: any) {}
}


function* DeleteDiscount({ payload }: any) {
    try {
        yield put(actions.deleteDiscountSuccess(payload));
        const res: ResponseGenerator = yield call(request.remove, `api/discount/${payload}`);
        const { status, data }: ResponseGenerator = res;
    } catch (err) {
        console.log(err);
    }
}

function* UpdateDiscount({ payload }: any) {
    try {
        const { id }: { id: number } = payload;

        yield put(actions.updateDiscountSuccess(payload));
        const res: ResponseGenerator = yield call(request.put, `api/discount/${id}/put`, payload);
    } catch (err) {
        console.log(err);
    }
}
export default function* rootSaga() {
    yield takeLatest(types.GET_USER, FetchUser);
    yield takeLatest(types.GET_USER_BY_RULE, GetUserByRule);

    // Product
    yield takeLatest(types.ADD_PRODUCT, AddProduct);
    yield takeLatest(types.REMOVE_PRODUCT, RemoveProduct);
    yield takeLatest(types.UPDATE_PRODUCT, UpdateProduct);
    yield takeLatest(types.GET_PRODUCT_PAGE, GetProductPage);

    //
    yield takeLatest(types.GET_BLOG_PAGE, GetBlogPage);
    yield takeLatest(types.ADD_FEEDBACK, AddFeedback);
    yield takeLatest(types.DELETE_FEEDBACK, DeleteFeedback);
    yield takeLatest(types.ADD_ORDER, AddOrder);
    yield takeLatest(types.GET_ORDER, GetOrder);
    yield takeLatest(types.REMOVE_ORDER, RemoveOrder);
    yield takeLatest(types.UPDATE_ORDER, UpdateOrder);
    yield takeLatest(types.ADD_BLOGS, AddBlogs);
    yield takeLatest(types.REMOVE_BLOGS, RemoveBlogs);
    yield takeLatest(types.UPDATE_BLOGS, UpdateBlogs);
    yield takeLatest(types.ADD_BLOG_COMMENT, AddBlogsComment);
    yield takeLatest(types.DELETE_BLOG_COMMENT, DeleteBlogsComment);
    yield takeLatest(types.ADD_EMAIL, AddEmail);
    yield takeLatest(types.REMOVE_EMAIL, DeleteEmail);

    // IMG WORK
    yield takeLatest(types.ADD_IMG_WORK, CreateImgWork);
    yield takeLatest(types.DELETE_IMG_WORK, DeleteImgWork);
    yield takeLatest(types.UPDATE_IMG_WORK, UpdateImgWork);
    yield takeLatest(types.GET_IMG_WORK_BY_TYPE, GetImageWorkByType);

    // NOTIFICATIONS
    yield takeLatest(types.ADD_NOTIFICATION, AddNotify);
    yield takeLatest(types.GET_ALL_NOTIFICATIONS_BY_ID, GetAllNotificationsById);

    // User
    yield takeLatest(types.UPDATE_SESSION_USER, updateSessionUser);

    // DISCOUNT
    yield takeLatest(types.ADD_DISCOUNT, AddDiscount);
    yield takeLatest(types.DELETE_DISCOUNT, DeleteDiscount);
    yield takeLatest(types.UPDATE_DISCOUNT, UpdateDiscount);
}
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
                const { cart, product, management, blog, order, emailkm } = person.data[0] ?? [];
                if (person.data[0].rule === 'admin') {
                    yield put(actions.getProduct(product ?? []));
                    // yield put(actions.getCart(cart ?? []));
                    yield put(actions.getManagement(management ?? []));
                    yield put(actions.getBlog(blog ?? []));
                    yield put(actions.getAdminOrder(order ?? []));
                    yield put(actions.getEmail(emailkm ?? []));
                } else {
                    yield put(actions.getManagement(management ?? []));
                    // yield put(actions.getCart(cart ?? []));
                }
            }
        }
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
        console.log(payload);
        const res: ResponseGenerator = yield call(request.post, 'api/email', payload);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

function* DeleteEmail({ payload }: any) {
    try {
        const res: ResponseGenerator = yield call(request.remove, `api/email/${payload}`);
        if (res.status === 200) {
            yield put(actions.removeEmailSuccess(payload));
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield takeLatest(types.GET_USER, FetchUser);
    yield takeLatest(types.ADD_PRODUCT, AddProduct);
    yield takeLatest(types.REMOVE_PRODUCT, RemoveProduct);
    yield takeLatest(types.UPDATE_PRODUCT, UpdateProduct);
    yield takeLatest(types.GET_PRODUCT_PAGE, GetProductPage);
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
}

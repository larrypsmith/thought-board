export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, id, title, caption, url) => {
    return {
        type: OPEN_MODAL,
        modal,
        id,
        title,
        caption,
        url
    }
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
};
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, boardId, title, caption, url, noteList) => {
    return {
        type: OPEN_MODAL,
        modal,
        boardId,
        title,
        caption,
        url,
        noteList
    }
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
};
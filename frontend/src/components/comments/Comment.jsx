import React from 'react';
import { FiMessageSquare, FiEdit2, FiTrash } from 'react-icons/fi';

import { images, stables } from '../../constants';
import CommentsForm from './CommentsForm';

const Comment = ({
    comment,
    logginedUserId,
    affectedComment,
    setAffectedComment,
    addComment,
    parentId = null,
    updateComment,
    deleteComment,
    replies,
}) => {
    const isUserLoggined = Boolean(logginedUserId);
    const commentBelongsToUser = logginedUserId === comment.user._id;
    const isReplying =
        affectedComment &&
        affectedComment.type === 'balasan' &&
        affectedComment._id === comment._id;
    const isEditing =
        affectedComment &&
        affectedComment.type === 'perbarui' &&
        affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id;

    return (
        <div className='flex flex-nowrap items-start gap-x-3 bg-[#fffff5] p-3 rounded-lg'>
            <img
                src={
                    comment?.user?.avatar
                        ? stables.UPLOAD_FOLDER_BASE_URL + comment.user.avatar
                        : images.defaultUserImage}
                alt="user profile"
                className='w-9 h-9 object-cover rounded-full'
            />
            <div className='flex-1 flex flex-col'>
                <h5 className='font-bold text-dark-light text-xs lg:text-sm'>
                    {comment.user.name}
                </h5>
                <span className='text-xs text-dark-light'>
                    {new Date(comment.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                    })}
                </span>
                {!isEditing && (
                    <p className='font-opensans mt-[10px] text-dark-light'>{comment.desc}</p>
                )}
                {isEditing && (
                    <CommentsForm btnLabel="perbarui"
                        formSubmitHandler={(value) => updateComment(value, comment._id)}
                        formCancelHandler={() => setAffectedComment(null)}
                        initialText={comment.desc}
                    />
                )}
                <div className='flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3'>
                    {isUserLoggined && (
                        <button className='flex items-center space-x-2'
                            onClick={() =>
                                setAffectedComment({ type: 'balasan', _id: comment._id })
                            }>
                            <FiMessageSquare className="w-4 h-auto" />
                            <span>Balas</span>
                        </button>
                    )}
                    {commentBelongsToUser && (
                        <>
                            <button
                                className='flex items-center space-x-2'
                                onClick={() =>
                                    setAffectedComment({ type: 'perbarui', _id: comment._id })
                                }
                            >
                                <FiEdit2 className="w-4 h-auto" />
                                <span>Edit</span>
                            </button>
                            <button
                                className='flex items-center space-x-2'
                                onClick={() => deleteComment(comment._id)}
                            >
                                <FiTrash className="w-4 h-auto" />
                                <span>Hapus</span>
                            </button>
                        </>
                    )}
                </div>
                {isReplying && (
                    <CommentsForm
                        btnLabel="Balas"
                        formSubmitHandler={(value) =>
                            addComment(value, repliedCommentId, replyOnUserId)
                        }
                        formCancelHandler={() => setAffectedComment(null)}
                    />
                )}
                {replies.length > 0 && (
                    <div>
                        {replies.map((reply) => (
                            <Comment
                                key={reply._id}
                                addComment={addComment}
                                affectedComment={affectedComment}
                                setAffectedComment={setAffectedComment}
                                comment={reply}
                                deleteComment={deleteComment}
                                logginedUserId={logginedUserId}
                                replies={[]}
                                updateComment={updateComment}
                                parentId={comment._id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment

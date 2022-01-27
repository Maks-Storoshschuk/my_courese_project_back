module.exports = {
    userNormalizer: (userToNormalize) => {
        const fieldsToRemove = [
            'password',
            '__v',
            'createdAt',
            'updatedAt'
        ];
        fieldsToRemove.forEach((field) => {
            delete userToNormalize[field];
        });
        return userToNormalize;
    }
};

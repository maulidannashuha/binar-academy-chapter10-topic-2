jest.mock('../models/userModel', () => {
    return {
        findOne: jest.fn().mockResolvedValue({
            name: 'John Doe', // Mock the user data as per your needs
        }),
    };
});
const SCHEME = {
    required: true,
    type: 'object',
    properties: {
        cat: {
            required: true,
            type: 'object',
            properties: {
                name: {
                    required: true,
                    type: 'string'
                },
                owner: {
                    required: true,
                    type: 'string'
                }
            }
        }
    }
};

interface Auth {

}

interface AuthAPI {
    existsByUsername: () => Promise<boolean>
}

const authAPI: AuthAPI = {
    existsByUsername: async () => {
        return true;
    }
}
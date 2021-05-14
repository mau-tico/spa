const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    // suponiendo que se sale del IF
    return `/${route}`;
};

export default resolveRoutes;
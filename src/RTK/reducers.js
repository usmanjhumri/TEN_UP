let initialState = {
    status: true,
    adminIsActive: true,
    loader: true,
    ourServicesSection: true,
    weDealInSection: true,
    upCommingSection: true,
    reviewsSection: true,
    BuildRealBrickSection: true,
    teamSection: true,
    groupSection: true,
    branchSection: true,
    sliderSection: true,
};







export const rootReducer = (oldData = initialState, payload) => {
    return oldData;
}
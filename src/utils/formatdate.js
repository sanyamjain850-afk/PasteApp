export const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-Us", {
        
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    
};
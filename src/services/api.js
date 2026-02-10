// API Base URLs
const JSONPLACEHOLDER_API = 'https://jsonplaceholder.typicode.com';
const FAKESTORE_API = 'https://fakestoreapi.com';

// Fetch users from JSONPlaceholder
export const fetchUsers = async () => {
    try {
        const response = await fetch(`${JSONPLACEHOLDER_API}/users`);
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();

        // Transform and add additional fields
        return data.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            status: Math.random() > 0.5 ? 'Active' : 'Inactive',
            joinedDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
        }));
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Fetch products from Fake Store API
export const fetchProducts = async () => {
    try {
        const response = await fetch(`${FAKESTORE_API}/products`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();

        // Transform to order format
        const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered'];
        return data.map((product, index) => ({
            orderId: `#${10000 + index}`,
            product: product.title,
            price: product.price,
            status: statuses[Math.floor(Math.random() * statuses.length)],
            category: product.category,
            image: product.image,
        }));
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Get dashboard stats
export const getDashboardStats = async () => {
    try {
        const [users, products] = await Promise.all([fetchUsers(), fetchProducts()]);

        return {
            totalUsers: users.length,
            totalOrders: products.length,
            totalRevenue: products.reduce((sum, p) => sum + p.price, 0),
            totalSales: products.filter(p => p.status === 'Delivered').length,
        };
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        throw error;
    }
};

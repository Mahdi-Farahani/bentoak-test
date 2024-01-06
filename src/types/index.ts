export interface NavbarProps {
  window?: () => Window;
  user: { AuthStatus: "auth" | "unAuth" };
}

export interface User {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductCardProps {
  filteredProducts: Product[];
}

export interface PaginationProps {
  currentPage: number;
  pagesCount: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ChartsProps {
  postData: {
    posts: Post[];
  };
  commentData: {
    comments: Comment[];
  };
}

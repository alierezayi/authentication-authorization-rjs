import CategoryForm from "@/components/templates/categories/CategoryForm";
import CategoryList from "@/components/templates/categories/CategoryList";

function AdminPage() {
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;

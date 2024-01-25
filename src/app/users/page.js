'use client';
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Added for search functionality
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch('/api/users').then(response => {
      response.json().then(users => {
        setUsers(users);
      });
    });
  }, []);

  // Function to update search query
  function handleSearch(event) {
    setSearchQuery(event.target.value.toLowerCase());
  }

  // Filtered users based on search query
  const filteredUsers = users.filter(user =>
    (user.name && user.name.toLowerCase().includes(searchQuery)) ||
    (user.email && user.email.toLowerCase().includes(searchQuery))
  );

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin';
  }

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <UserTabs isAdmin={true} />
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded mt-4" // Add search input
      />
      <div className="mt-8">
        {users?.length > 0 && filteredUsers.map(user => ( // Use filteredUsers here
          <div
            key={user._id}
            className="bg-gray-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
              <div className="text-gray-900">
                {!!user.name && (<span>{user.name}</span>)}
                {!user.name && (<span className="italic">בלי שם</span>)}
              </div>
              <span className="text-gray-500">{user.email}</span>
            </div>
            <div>
              <Link className="button" href={'/users/'+user._id}>
                ערוך
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

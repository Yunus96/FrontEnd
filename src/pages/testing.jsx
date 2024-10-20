import React, { useState, useEffect } from 'react';
import { Container, Card } from '../components/index.js';
import authService from '../service/auth.service.js';

function AllEmail() {
    const [emails, setEmails] = useState([]);
    const [filter, setFilter] = useState('All'); // Default filter is 'All'

    useEffect(() => {
        authService.getEmails().then((email) => {
            if (email.length > 0) {
                setEmails(email);
            }
        });
    }, []);

    // Filtered emails based on the selected filter
    const filteredEmails = emails.filter((mail) => {
        if (filter === 'Unread') return mail.unread;
        if (filter === 'Read') return mail.read;
        if (filter === 'Favorites') return mail.favourite;
        return true; // For 'All' filter
    });

    return (
        <div className="w-full py-8">
            {/* Filter Buttons */}
            <div className="flex justify-start mb-4">
                Filter By:   
                <button 
                    className={`mr-4 ${filter === 'Unread' ? 'text-blue-500' : 'text-gray-500'}`} 
                    onClick={() => setFilter('Unread')}
                >
                    Unread
                </button>
                <button 
                    className={`mr-4 ${filter === 'Read' ? 'text-blue-500' : 'text-gray-500'}`} 
                    onClick={() => setFilter('Read')}
                >
                    Read
                </button>
                <button 
                    className={`mr-4 ${filter === 'Favorites' ? 'text-blue-500' : 'text-gray-500'}`} 
                    onClick={() => setFilter('Favorites')}
                >
                    Favorites
                </button>
                <button 
                    className={`mr-4 ${filter === 'All' ? 'text-blue-500' : 'text-gray-500'}`} 
                    onClick={() => setFilter('All')}
                >
                    All
                </button>
            </div>

            {/* Emails List */}
            <div className="flex flex-col">
                {filteredEmails.map((mail, index) => (
                    <div key={index} className="p-2 m-0">
                        <Card 
                            id={mail.id}
                            from={mail.from}
                            avatar={mail.avatar}
                            subject={mail.subject}
                            description={mail.short_description}
                            date={mail.date}
                            favourite={mail.favourite}
                            read={mail.read}
                            unread={mail.unread}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllEmail;

# Library Management System - JavaScript Project
## Beginner Level | Functions, Objects, Array Methods & Modules (NO OOP)

---

## 📚 Project Overview

Build a console-based library management system using **functional programming** principles:
- Managing books (add, delete, search)
- Managing library members
- Borrowing and returning books
- Tracking loan history
- Generating reports and statistics

**Important Constraints:**
- ✅ Console-based (no DOM manipulation)
- ✅ NO Classes or OOP
- ✅ Only functions and plain objects
- ✅ Focus on functional programming

---

## 🎯 Learning Objectives

Students will practice:
- Writing pure functions
- Creating and working with plain objects
- Using array methods (`filter`, `map`, `reduce`, `sort`, `find`, `some`, `every`)
- Understanding ES6 modules (import/export)
- Factory functions pattern
- Immutable data handling
- Functional programming principles
- Application architecture

---

## 📁 Required Project Structure

```
library-system/
├── src/
│   ├── models/
│   │   ├── bookFactory.js    // Functions to create book objects
│   │   ├── memberFactory.js  // Functions to create member objects
│   │   └── loanFactory.js    // Functions to create loan objects
│   ├── services/
│   │   ├── bookService.js    // Book management logic
│   │   ├── memberService.js  // Member management logic
│   │   └── loanService.js    // Loan management logic
│   ├── utils/
│   │   ├── validators.js     // Validation functions
│   │   └── helpers.js        // Helper/utility functions
│   ├── data/
│   │   └── storage.js        // In-memory "database" (arrays)
│   └── index.js              // Entry point / demonstration
└── package.json
```

---

## 📋 Functional Requirements

### 1. Book Management
**Required Features:**
- Add new book (using factory function)
- Delete book by ID
- Update book details (immutably - create new object)
- Search books by title or author
- Filter books by availability status
- Filter books by category
- Sort books by: title, author, year, popularity
- Get most popular books (top N)
- Get statistics by category (count per category)

**Book Properties:**
- `id` - unique identifier
- `title` - book title
- `author` - author name
- `category` - genre/category
- `year` - publication year
- `totalCopies` - total number of copies
- `availableCopies` - currently available copies
- `timesLoaned` - how many times borrowed
- `rating` - average rating (bonus feature)

---

### 2. Member Management
**Required Features:**
- Register new member (using factory function)
- Delete member by ID
- Update member details (immutably)
- Find member by ID
- Find member by email
- Get member's active loans
- Get member's loan history
- Calculate total books read by member
- Get most active members (top N)
- Check if member can borrow (max 3 active loans)

**Member Properties:**
- `id` - unique identifier
- `name` - member name
- `email` - email address
- `phone` - phone number
- `joinDate` - registration date
- `activeLoans` - array of active loan IDs
- `loanHistory` - array of completed loan IDs

---

### 3. Loan Management
**Required Features:**
- Borrow book (create loan, validate availability and member status)
- Return book (update loan, calculate late fees)
- Get all active loans
- Get all completed loans
- Get overdue loans
- Get loans by member ID
- Get loans by book ID
- Calculate days overdue
- Calculate late fees (2 NIS per day)
- Calculate average loan duration

**Loan Properties:**
- `id` - unique identifier
- `bookId` - borrowed book ID
- `memberId` - borrowing member ID
- `borrowDate` - when borrowed
- `dueDate` - when due (14 days from borrow)
- `returnDate` - when returned (null if active)
- `isActive` - true if not yet returned

**Business Rules:**
- Loan period: 14 days
- Maximum active loans per member: 3
- Late fee: 2 NIS per day overdue
- Cannot borrow if member has overdue loans
- Cannot borrow if no copies available

---

### 4. Reports & Statistics
**Required Reports:**
- Most popular books (by times borrowed)
- Most active members (by books read)
- Books by category (count per category)
- Total active loans
- Total overdue loans
- Total late fees owed
- Average loan duration
- Current library status (total books, available, borrowed)

---

## 📝 Required Modules & Functions

### models/bookFactory.js
**Required Functions:**
- `createBook(id, title, author, category, year, copies)` - Factory function
- `isBookAvailable(book)` - Pure function checking availability
- `borrowBook(book)` - Pure function returning updated book (immutable)
- `returnBook(book)` - Pure function returning updated book (immutable)
- `getBookInfo(book)` - Pure function returning formatted string

### models/memberFactory.js
**Required Functions:**
- `createMember(id, name, email, phone)` - Factory function
- `canMemberBorrow(member)` - Pure function checking if can borrow
- `addActiveLoan(member, loanId)` - Pure function returning updated member
- `removeActiveLoan(member, loanId)` - Pure function returning updated member
- `getTotalBooksRead(member)` - Pure function calculating total

### models/loanFactory.js
**Required Functions:**
- `createLoan(id, bookId, memberId)` - Factory function
- `returnLoan(loan)` - Pure function returning updated loan
- `isLoanOverdue(loan)` - Pure function checking if overdue
- `getDaysOverdue(loan)` - Pure function calculating days
- `getLateFee(loan, feePerDay)` - Pure function calculating fee
- `getDaysLoaned(loan)` - Pure function calculating duration

### data/storage.js
**Required Exports:**
- `books` - array of all books
- `members` - array of all members
- `loans` - array of all loans
- `generateId()` - function to generate unique IDs
- Helper functions to add/update/remove items from arrays

### services/bookService.js
**Required Functions:**
- `addBook(bookData)` - Add new book to storage
- `getAllBooks()` - Get all books
- `findBookById(bookId)` - Find specific book
- `deleteBook(bookId)` - Remove book from storage
- `searchBooks(searchTerm)` - Search by title/author
- `getAvailableBooks()` - Filter available books
- `getBorrowedBooks()` - Filter borrowed books
- `sortBooks(criteria)` - Sort by different criteria
- `getMostPopularBooks(limit)` - Get top N popular
- `getBooksByCategory(category)` - Filter by category
- `getCategoryStats()` - Calculate category statistics

### services/memberService.js
**Required Functions:**
- `addMember(memberData)` - Register new member
- `getAllMembers()` - Get all members
- `findMemberById(memberId)` - Find specific member
- `findMemberByEmail(email)` - Find by email
- `deleteMember(memberId)` - Remove member
- `getMostActiveMembers(limit)` - Get top N active members
- `checkCanBorrow(memberId)` - Validate borrowing eligibility
- `getMemberStats(memberId)` - Get member statistics

### services/loanService.js
**Required Functions:**
- `borrowBook(bookId, memberId)` - Create loan with validation
- `returnBook(loanId)` - Process book return
- `getActiveLoans()` - Get all active loans
- `getAllLoans()` - Get all loans
- `getOverdueLoans()` - Filter overdue loans
- `getLoansByMember(memberId)` - Filter by member
- `getLoansByBook(bookId)` - Filter by book
- `getStatistics()` - Calculate all statistics

### utils/validators.js
**Required Functions:**
- `isValidEmail(email)` - Validate email format
- `isValidPhone(phone)` - Validate phone format
- `isValidYear(year)` - Validate publication year
- `isValidString(str, minLength)` - Validate string length
- `isPositiveNumber(num)` - Validate positive number
- `validateBookData(bookData)` - Validate all book fields
- `validateMemberData(memberData)` - Validate all member fields

### utils/helpers.js
**Required Functions:**
- `formatDate(date)` - Format date to readable string
- `daysBetween(date1, date2)` - Calculate days between dates
- `capitalize(str)` - Capitalize first letter
- `formatCurrency(amount, currency)` - Format money
- `getUniqueValues(arr)` - Get unique array values
- `groupBy(arr, key)` - Group array by property
- `calculatePercentage(part, total)` - Calculate percentage

### index.js
**Required Demonstrations:**
1. Add multiple books
2. Register multiple members
3. Borrow several books
4. Search functionality
5. Display available books
6. Show popular books
7. Display category statistics
8. Show active loans
9. Return a book
10. Display all statistics

---

## 📝 Student Tasks & Phases

### Phase 1 - Foundation (Required)
**Goal:** Create basic structure and factory functions

**Tasks:**
1. Set up project folder structure
2. Initialize npm project with `"type": "module"`
3. Create all required files
4. Implement factory functions in `models/`:
   - Book factory with helper functions
   - Member factory with helper functions
   - Loan factory with helper functions
5. Create storage module with arrays and helper functions
6. Implement all validation functions
7. Implement all helper utility functions

**Deliverables:**
- Complete folder structure
- All factory functions working
- All pure helper functions for models
- Storage system ready
- Validators working

**Key Concepts:** Factory functions, Pure functions, Immutability

---

### Phase 2 - Services (Required)
**Goal:** Implement all business logic

**Tasks:**
1. Complete `bookService.js`:
   - All CRUD operations
   - Search and filter using array methods
   - Sort functionality
   - Statistics calculations using reduce
   
2. Complete `memberService.js`:
   - All CRUD operations
   - Member validation
   - Borrowing eligibility checks
   
3. Complete `loanService.js`:
   - Borrow workflow with validations
   - Return workflow with fee calculation
   - Filter and statistics functions
   - Integration with book and member services

**Deliverables:**
- All services fully functional
- All required functions implemented
- Proper error handling
- Validation on all operations

**Key Concepts:** Composition, Higher-order functions, Array methods

---

### Phase 3 - Integration & Testing (Required)
**Goal:** Connect everything and demonstrate functionality

**Tasks:**
1. Create comprehensive demo in `index.js`
2. Test all workflows:
   - Add books → Register members → Borrow → Search → Return
   - Edge cases (no copies, borrowing limit, overdue)
   - All filter and sort operations
   - All statistics calculations
3. Ensure immutability throughout
4. Handle errors gracefully with clear messages
5. Use helper functions for formatting output
6. Display results in organized, readable format

**Deliverables:**
- Working demo with all features
- Console output showing all functionality
- Error handling demonstrated
- Clean, organized output

**Key Concepts:** Module integration, Functional composition, Error handling

---

### Phase 4 - Advanced Features (Bonus)
**Goal:** Add creative enhancements

**Choose at least 2 from:**

1. **Book Reservations**
   - Queue system when book unavailable
   - Notify when book becomes available
   - Manage reservation list

2. **Rating System**
   - Members rate books (1-5 stars)
   - Calculate average ratings
   - Filter by rating

3. **Book Recommendations**
   - Suggest similar books (same category/author)
   - Recommend based on member's history
   - Popular in category

4. **Export/Import Data**
   - Save library state to JSON file
   - Load library state from JSON
   - Backup and restore functionality

5. **Advanced Search**
   - Multiple filter criteria simultaneously
   - Search by year range
   - Complex queries

6. **Member Badges/Achievements**
   - Award badges for milestones
   - Track reading goals
   - Member levels (bronze/silver/gold)

7. **Reading Challenges**
   - Set reading goals
   - Track progress
   - Generate completion reports

8. **Fine Payment System**
   - Track paid/unpaid fines
   - Payment history
   - Outstanding balance

9. **Book Series Management**
   - Group books into series
   - Track reading order
   - Series completion status

10. **Library Analytics Dashboard**
    - Detailed statistics
    - Trends over time
    - Visual data representations (ASCII charts)

**Deliverables:**
- At least 2 bonus features fully working
- Documentation of new features
- Updated demo showing new functionality

---

## 🎯 Key Functional Programming Concepts

### Pure Functions
- No side effects
- Same input always produces same output
- Don't modify external state
- Don't rely on external state

### Immutability
- Never modify existing objects/arrays
- Always create new objects/arrays
- Use spread operator (`...`)
- Use array methods that return new arrays

### Factory Functions
- Functions that create and return objects
- Alternative to classes/constructors
- No `new` keyword needed
- Can have private variables through closures

### Higher-Order Functions
- Functions that take functions as parameters
- Functions that return functions
- Enable composition and reusability

### Array Methods Mastery
- `filter()` - Select items matching criteria
- `map()` - Transform each item
- `reduce()` - Aggregate to single value
- `sort()` - Order items
- `find()` - Get first match
- `some()` - Check if any match
- `every()` - Check if all match
- Chaining methods together

### Function Composition
- Building complex operations from simple functions
- Combining multiple functions
- Creating reusable function pipelines

---

## ✅ Evaluation Criteria

### Functional Programming (40%)
- All functions are pure where appropriate
- No mutations (immutable data handling)
- No classes or `this` keyword
- Proper use of factory functions
- Effective use of closures if needed
- Clean separation of concerns

### Functionality (30%)
- All required features work correctly
- Proper error handling and validation
- Edge cases handled appropriately
- Business rules enforced
- No bugs in main workflows

### Array Methods Usage (20%)
- Effective use of filter, map, reduce, sort, find
- Avoiding manual loops where array methods work
- Proper method chaining
- Understanding of when to use each method
- Efficient solutions

### Code Quality (10%)
- Clean, readable code
- Meaningful function and variable names
- Proper module organization
- Comments where needed (not excessive)
- Consistent code style

---

## 💡 Important Guidelines

### DO:
✅ Use `const` for everything (unless you need `let`)
✅ Use arrow functions for short functions
✅ Use destructuring to extract properties
✅ Use spread operator for copying objects/arrays
✅ Return new objects/arrays instead of modifying
✅ Write small, focused functions
✅ Use array methods instead of loops
✅ Validate inputs at service boundaries
✅ Handle errors gracefully
✅ Test frequently with console.log

### DON'T:
❌ Use classes or `this` keyword
❌ Mutate objects or arrays
❌ Use `var` keyword
❌ Write functions with side effects (when avoidable)
❌ Create functions longer than 20 lines (usually)
❌ Mix concerns (keep functions focused)
❌ Forget to handle errors
❌ Use manual `for` loops when array methods work
❌ Modify function parameters
❌ Write unclear variable/function names

---

## 📦 Package.json Setup

**Required configuration:**
```
{
  "type": "module"  // MUST include this for ES6 modules
}
```

**Suggested scripts:**
- `"start": "node src/index.js"` - Run demo
- `"dev": "node --watch src/index.js"` - Run with auto-reload

---

## 🚀 Getting Started Steps

1. Create project folder: `library-system`
2. Run: `npm init -y`
3. Edit `package.json` to add `"type": "module"`
4. Create all folders and files as specified
5. Start with factory functions in `models/`
6. Implement pure helper functions for each model
7. Build storage module
8. Implement validators and helpers
9. Build services one by one
10. Create comprehensive demo
11. Test everything thoroughly
12. Add bonus features
13. Clean up and document

---

## 📊 Expected Console Output Format

Your demo should produce organized output showing:
- Section headers for each operation
- Success/failure messages for operations
- Formatted lists of items
- Statistics in readable format
- Clear error messages when applicable
- Visual separators between sections

**Example structure:**
```
=== Library Management System Demo ===

=== 1. Adding Books ===
✓ Added 5 books

=== 2. Registering Members ===
✓ Registered 3 members

=== 3. Borrowing Books ===
✓ Loan created successfully
✓ Loan created successfully
✗ Cannot borrow: Member limit reached

=== 4. Search Results ===
Found 2 books matching "Harry":
  - "Harry Potter..." by J.K. Rowling
  - "Prince Harry Biography" by Author Name

=== 5. Library Statistics ===
  Total Books: 50
  Available: 32
  On Loan: 18
  Total Loans: 156
  Active Loans: 18
  Average Loan Duration: 12.5 days
  Total Late Fees: 84 NIS

=== Demo Complete ===
```

---

## 🎓 Learning Resources & Tips

### Understanding Pure Functions
A pure function:
- Always returns the same output for same input
- Has no side effects (doesn't modify external state)
- Doesn't depend on external state
- Is easier to test and reason about

### Understanding Immutability
Instead of changing data, create new data:
- Objects: Use spread `{...obj, newProp: value}`
- Arrays: Use methods that return new arrays or spread `[...arr, newItem]`
- Benefits: Predictable code, easier debugging, no accidental changes

### Mastering Array Methods
- `filter`: When you want some items (returns array)
- `find`: When you want one item (returns item or undefined)
- `map`: When you want to transform all items (returns array)
- `reduce`: When you want to calculate single value (returns value)
- `sort`: When you want items in order (modifies array, so copy first)
- `some`: When you want to check if any match (returns boolean)
- `every`: When you want to check if all match (returns boolean)

### Factory Functions Pattern
- Simple function that returns an object
- Can create multiple similar objects
- Can have default values
- Can include private data through closures
- No `new` keyword needed

---

## 🎯 Success Indicators

Your project is successful when:
- ✅ All required functions are implemented
- ✅ No classes are used (only functions and objects)
- ✅ Data is handled immutably
- ✅ Array methods are used effectively
- ✅ Code is organized in modules
- ✅ Validation is comprehensive
- ✅ Error handling is graceful
- ✅ Demo shows all features working
- ✅ Code is clean and readable
- ✅ At least 2 bonus features work (optional)

---

## 📚 Project Submission

### What to Submit:
1. Complete source code in proper structure
2. `package.json` with correct configuration
3. README with:
   - How to run the project
   - Features implemented
   - Any bonus features added
   - Known limitations (if any)
4. Brief reflection on what you learned

### How to Run (for grading):
```bash
npm install  # if any dependencies
node src/index.js
```

---

## 💪 Challenge Yourself

Try to:
- Keep all functions under 15 lines
- Use function composition
- Create reusable utility functions
- Write self-documenting code (clear names)
- Minimize side effects
- Think in data transformations
- Chain array methods elegantly

---

## 🎯 Final Notes

This project will teach you:
- How to think functionally
- How to organize code without classes
- How to work with immutable data
- How to master array methods
- How to build modular applications
- How to write clean, maintainable code

**Remember:** The goal isn't just to complete the requirements, but to understand functional programming principles and write better JavaScript!

Good luck and happy coding! 🚀📚

---

**Questions or stuck?** 
- Review the requirements carefully
- Test small pieces independently
- Use console.log to debug
- Ask for help when needed
- Collaborate on ideas (but write your own code!)

// ========== script.js - AUTO DETECT VERSION ==========

document.addEventListener('DOMContentLoaded', function() {
    
    // Senarai lab (tanpa status - akan auto detect)
    const labs = [
        { number: '01', title: 'Travel Blog - HTML Only', folder: 'lab-01' },
        { number: '02', title: 'Selectors & Properties', folder: 'lab-02' },
        { number: '03', title: 'Mufti Menk - Basic', folder: 'lab-03' },
        { number: '04', title: 'Running Shoes Store', folder: 'lab-04' },
        { number: '05', title: 'Registration Form', folder: 'lab-05' },
        { number: '06', title: 'Mufti Menk - Navigation', folder: 'lab-06' },
        { number: '07', title: 'Coming Soon', folder: 'lab-07' },
        { number: '08', title: 'Coming Soon', folder: 'lab-08' },
        { number: '09', title: 'Coming Soon', folder: 'lab-09' },
        { number: '10', title: 'Coming Soon', folder: 'lab-10' },
        { number: '11', title: 'Coming Soon', folder: 'lab-11' },
        { number: '12', title: 'Coming Soon', folder: 'lab-12' },
        { number: '13', title: 'Coming Soon', folder: 'lab-13' },
        { number: '14', title: 'Coming Soon', folder: 'lab-14' },
        { number: '1', title: 'Coming Soon', folder: 'lab-13' }
    ];

    // Function untuk check file exist
    async function checkLabExists(lab) {
        try {
            // Check index.html dalam folder lab
            const response = await fetch(`${lab.folder}/index.html`, { method: 'HEAD' });
            return response.ok;  // true kalau file wujud
        } catch (error) {
            return false;  // file tak wujud
        }
    }

    // Function untuk generate cards
    async function generateLabCards() {
        const labGrid = document.getElementById('labGrid');
        labGrid.innerHTML = '<div class="loading">Checking labs... 🔍</div>';
        
        let completed = 0;
        const updatedLabs = [];
        
        // Check setiap lab satu persatu
        for (const lab of labs) {
            const exists = await checkLabExists(lab);
            if (exists) completed++;
            
            updatedLabs.push({
                ...lab,
                status: exists ? 'completed' : 'pending'
            });
        }
        
        // Display cards
        displayLabs(updatedLabs, completed);
    }
    
    function displayLabs(labs, completed) {
        const labGrid = document.getElementById('labGrid');
        labGrid.innerHTML = '';
        
        labs.forEach(lab => {
            const card = document.createElement('div');
            card.className = `lab-card ${lab.status}`;
            
            if (lab.status === 'completed') {
                card.innerHTML = `
                    <div class="lab-number">Lab ${lab.number}</div>
                    <div class="lab-title">${lab.title}</div>
                    <div class="lab-links">
                        <a href="${lab.folder}/index.html">View Lab</a>
                        <a href="${lab.folder}/style.css" target="_blank">CSS</a>
                    </div>
                    <div class="lab-status">✅ Completed</div>
                `;
            } else {
                card.innerHTML = `
                    <div class="lab-number">Lab ${lab.number}</div>
                    <div class="lab-title">${lab.title}</div>
                    <div class="lab-links">
                        <span class="not-available">Not Available</span>
                    </div>
                    <div class="lab-status">⏳ Pending</div>
                `;
            }
            
            labGrid.appendChild(card);
        });
        
        // Update progress
        const total = labs.length;
        const percent = ((completed / total) * 100).toFixed(0);
        
        document.getElementById('progressBar').innerHTML = 
            `Progress: ${completed} / ${total} Labs Completed (${percent}%)`;
        
        document.getElementById('footerStats').innerHTML = 
            `Total Labs: ${total} | Completed: ${completed} | Remaining: ${total - completed}`;
    }
    
    // Start the checking
    generateLabCards();

    // ========== script.js - SUPER SIMPLE AUTO DETECT ==========

document.addEventListener('DOMContentLoaded', async function() {
    
    // Senarai lab
    const labs = ['01','02','03','04','05','06','07','08','09','10','11','12','13'];
    const titles = [
        'CSS Basics',
        'Selectors & Properties',
        'Mufti Menk - Basic',
        'Running Shoes Store',
        'Registration Form',
        'Mufti Menk - Navigation',
        'Coming Soon', 'Coming Soon', 'Coming Soon',
        'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon'
    ];
    
    const labGrid = document.getElementById('labGrid');
    labGrid.innerHTML = '🔍 Scanning folders...';
    
    let completed = 0;
    let html = '';
    
    // Scan setiap lab
    for(let i = 0; i < labs.length; i++) {
        const labNum = labs[i];
        const folder = `lab-${labNum}`;
        
        // Check file wujud tak
        try {
            const response = await fetch(`${folder}/index.html`, { method: 'HEAD' });
            const exists = response.ok;
            
            if(exists) completed++;
            
            html += `
                <div class="lab-card ${exists ? 'completed' : 'pending'}">
                    <div class="lab-number">Lab ${labNum}</div>
                    <div class="lab-title">${titles[i]}</div>
                    <div class="lab-links">
                        ${exists ? 
                            `<a href="${folder}/index.html">View Lab</a>
                             <a href="${folder}/style.css" target="_blank">CSS</a>` : 
                            '<span class="not-available">Not Available</span>'}
                    </div>
                    <div class="lab-status">${exists ? '✅ Completed' : '⏳ Pending'}</div>
                </div>
            `;
        } catch {
            html += `
                <div class="lab-card pending">
                    <div class="lab-number">Lab ${labNum}</div>
                    <div class="lab-title">${titles[i]}</div>
                    <div class="lab-links">
                        <span class="not-available">Not Available</span>
                    </div>
                    <div class="lab-status">⏳ Pending</div>
                </div>
            `;
        }
    }
    
    // Display
    labGrid.innerHTML = html;
    
    // Update progress
    const total = labs.length;
    const percent = ((completed / total) * 100).toFixed(0);
    document.getElementById('progressBar').innerHTML = 
        `Progress: ${completed} / ${total} Labs Completed (${percent}%)`;
    document.getElementById('footerStats').innerHTML = 
        `Total Labs: ${total} | Completed: ${completed} | Remaining: ${total - completed}`;
});
});
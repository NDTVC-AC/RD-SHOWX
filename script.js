// Trainees Data from PDF
const traineesData = [
    // Day 1 (Wednesday 11/02/2026)
    { admNo: "3639/WTL4-M/J26", name: "Michael Muchangi Kinyua", gender: "Male", department: "AUTOMOTIVE", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3650/ATL5-M/J26", name: "Newton Maina Wambui", gender: "Male", department: "AUTOMOTIVE", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "1549/ATL5/24S", name: "ERICK MURIMI", gender: "Male", department: "AUTOMOTIVE", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "2175/ATL5/24S", name: "PATRICK MUGWERU", gender: "Male", department: "AUTOMOTIVE", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "2561/ATL5/24S", name: "CHRISTINE NJERI MWANGI", gender: "Female", department: "AUTOMOTIVE", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "0820/ATL6/24J", name: "WANGARI GLADYS NYAWIRA", gender: "Female", department: "AUTOMOTIVE", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3478/PTL5/25M", name: "LAWRENCE NJENGA GITAU", gender: "Male", department: "AUTOMOTIVE", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3741/WTL4-M/J26", name: "Kiuma Moses Mwangi", gender: "Male", department: "AUTOMOTIVE", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3642/PL5-M/J26", name: "Nelius Waithummbii", gender: "Female", department: "BUILDING", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3351/BTL6/25J", name: "BRIAN MUGANE MBOGO", gender: "Male", department: "BUILDING", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "1037/PL4/24S", name: "Nasibo Ali Kunu", gender: "Female", department: "BUILDING", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3623/BTL4/S25", name: "Derrick Chomba Wachira", gender: "Male", department: "BUILDING", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "1691/BTL5/24S", name: "ANTONY NJERE WAMWEA", gender: "Male", department: "BUILDING", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3549/BTL6/25S", name: "WILSON MWANGI KARIIUKI", gender: "Male", department: "BUILDING", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3702/PL5-M/J26", name: "Lincon Giatua", gender: "Male", department: "BUILDING", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3604/BTL5/25S", name: "BENSON KAROKI GICHIRA", gender: "Male", department: "BUILDING", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3713/PL4-M/J26", name: "Charles Maina", gender: "Male", department: "BUILDING", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3681/BML5-M/J26", name: "Lewis Macharia Muthengii", gender: "Male", department: "BUSINESS", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3686/BML6/J26", name: "Kaiyongi Kathambi Elka", gender: "Female", department: "BUSINESS", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3633/COSL6-M/J26", name: "Grace Wairimu", gender: "Female", department: "COSMETOLOGY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3658/COSL5-M/J26", name: "Daisy Wangeci Makau", gender: "Female", department: "COSMETOLOGY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3610/COSL4/25S", name: "PERISTA WAKIO MUTUGI", gender: "Female", department: "COSMETOLOGY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3605/COSL5/25S", name: "PURITY WANJIKU", gender: "Female", department: "COSMETOLOGY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3706/COSL4-M/J26", name: "Fidelis Wangithii", gender: "Female", department: "COSMETOLOGY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3279/COSL5/24J", name: "Stacy Wanjiru Wachira", gender: "Female", department: "COSMETOLOGY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3469/CosL6/25M", name: "Joan Muthoni Warui", gender: "Female", department: "COSMETOLOGY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3634/ETL5-M/J26", name: "Suleiman Gichina", gender: "Male", department: "ELECTRICAL", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3330/ETL5/25J", name: "MURIMI RAPHAEL MAINA", gender: "Male", department: "ELECTRICAL", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "0881/ETL5/24M", name: "CLARE WAIRIMU KARIMI", gender: "Female", department: "ELECTRICAL", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3677/ETL6-M/J26", name: "Joseph Irungu", gender: "Male", department: "ELECTRICAL", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "0892/ETL5/24S", name: "IAN MURIUKI KARIMI", gender: "Male", department: "ELECTRICAL", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "0825/ETL6/24J", name: "MUTHAMA PETER MAKAU", gender: "Male", department: "ELECTRICAL", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3712/ETL6-M/J26", name: "Denis Munene Kimathi", gender: "Male", department: "ELECTRICAL", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "0871/ETL5/24M", name: "BRIAN MWENDA", gender: "Male", department: "ELECTRICAL", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3170/ETI5/24S", name: "Cliffton Nyaga Njiru", gender: "Male", department: "ELECTRICAL", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3277/FDL6/25J", name: "Emmaline Wakio Kinyua", gender: "Female", department: "FASHION AND DESIGN", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3548/FDL5/25S", name: "SHARON MUBI WARUGURU", gender: "Female", department: "FASHION AND DESIGN", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3572/FDL4/25S", name: "Esther Wamutira", gender: "Female", department: "FASHION AND DESIGN", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3563/FDL4/25S", name: "YVONNE MARY", gender: "Female", department: "FASHION AND DESIGN", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "2002/FPL5/24S", name: "Gichira Pauline Waithira", gender: "Female", department: "HOSPITALITY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3673/FPL4-M/J26", name: "Christopher Munene Kamba", gender: "Male", department: "HOSPITALITY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "2209/FPL5/24S", name: "Mellany Wairimu Murimi", gender: "Female", department: "HOSPITALITY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3705/FPL6-M/J26", name: "Faith Wanjiku Kaura", gender: "Female", department: "HOSPITALITY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "1374/FPL6/24S", name: "JECINTA WANJIKU NGUNJIRI", gender: "Male", department: "HOSPITALITY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3349/FPL4/25J", name: "Alex Murithi Warui", gender: "Male", department: "HOSPITALITY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3168/FPL5/24S", name: "Florence Wangeci", gender: "Female", department: "HOSPITALITY", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3653/CSL6-M/J26", name: "Gikundi Franklin Mugambi", gender: "Male", department: "ICT", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3693/CSL6-M/J26", name: "Miriti Titus Mutisya", gender: "Male", department: "ICT", day: "DAY 1", date: "Wednesday 11/02/2026" },
    { admNo: "3703/ICTL6-M/J26", name: "Peter Maina Muchiri", gender: "Male", department: "ICT", day: "DAY 1", date: "Wednesday 11/02/2026" },

    // Day 2 (Thursday 12/02/2026)
    { admNo: "3641/ATL4-M/J26", name: "Caleb Nyaga Njiru", gender: "Male", department: "AUTOMOTIVE", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3657/ATL4-M/J26", name: "Aswin Muriithi Gicobi", gender: "Male", department: "AUTOMOTIVE", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "1692/ATL5/24S", name: "DERRICK WANJOHI", gender: "Male", department: "AUTOMOTIVE", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "2367/PTL5/24S", name: "HUDSON MURIITHI NJERI", gender: "Male", department: "AUTOMOTIVE", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "0734/ATL6/23S", name: "PATRICIA KARIMI RWAMBA", gender: "Female", department: "AUTOMOTIVE", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3678/ATL5-M/J26", name: "Newton Mureithi Wangui", gender: "Male", department: "AUTOMOTIVE", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3714/WTL4-M/J26", name: "Joram Mwangi Maina", gender: "Male", department: "AUTOMOTIVE", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3739/WTL4-M/J26", name: "Muriithi Billy Chomba", gender: "Male", department: "AUTOMOTIVE", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3651/PL5-M/J26", name: "Mary Wanjiku Wambui", gender: "Male", department: "BUILDING", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3675/PL4/26J", name: "Alex Murage Mwangi", gender: "Male", department: "BUILDING", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "2290/BTL5/24S", name: "NEWTON MURIUKI GITARI", gender: "Male", department: "BUILDING", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3534/PL5/25S", name: "TERY WANGUI RUGWA", gender: "Female", department: "BUILDING", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3425/BTL5/25M", name: "DUNCAN MURIMI MUCHOKI", gender: "Male", department: "BUILDING", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3544/PL5/25S", name: "FRANCIS KUBUTHI GACHAU", gender: "Male", department: "BUILDING", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "0886/BTL5/24M", name: "JEREMIAH KEN GITHEI", gender: "Male", department: "BUILDING", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3516/BTL5/25M", name: "COLLINS MURIUKI NJERI", gender: "Male", department: "BUILDING", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3734/PL3-M/J26", name: "Joseph Makare Waweru", gender: "Male", department: "BUILDING", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3689/BML5-M/J26", name: "Michael Mwenda Mutugi", gender: "Male", department: "BUSINESS", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3607/BML6/25S", name: "WANGILA ONESMUS MASINDE", gender: "Male", department: "BUSINESS", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3645/COSL4-M/J26", name: "Evalaurine Wangechi", gender: "Female", department: "COSMETOLOGY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3679/COSL6-M/J26", name: "Maryann Nyaki Maina", gender: "Female", department: "COSMETOLOGY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3595/COSL6/25S", name: "SANDRA KHATORO", gender: "Female", department: "COSMETOLOGY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3531/COSL4/25S", name: "SARAH W. MURIUKI", gender: "Female", department: "COSMETOLOGY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "2028/COSL5/24S", name: "James Mutugi Muriithi", gender: "Male", department: "COSMETOLOGY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3725/COSL5-M/J26", name: "Irene Njoki Kariuki", gender: "Female", department: "COSMETOLOGY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3743/COSL4-M/J26", name: "Lucy Wambui Wanjiru", gender: "Female", department: "COSMETOLOGY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3660/ETL5-M/J26", name: "Kelvin Kitua Maingi", gender: "Male", department: "ELECTRICAL", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3275/ETL6/25J", name: "DAVIS WACHIRA KAMAU", gender: "Male", department: "ELECTRICAL", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3341/ETL5/25J", name: "HARGES MUNENE NJAGI", gender: "Male", department: "ELECTRICAL", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3684/ETL5-M/J26", name: "Amo Ndabu", gender: "Male", department: "ELECTRICAL", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3158/ETL5/24S", name: "Paul Muthii Mugo", gender: "Male", department: "ELECTRICAL", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "0741/ETL6/23S", name: "MURIUNGI AMOS GITUMA", gender: "Male", department: "ELECTRICAL", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3727/ETL6-M/J26", name: "Michael Rukana Mwangi", gender: "Male", department: "ELECTRICAL", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "0806/ETL5/24M", name: "Caroline Gitau Wambui", gender: "Female", department: "ELECTRICAL", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3034/ETL5/24S", name: "Collins Kamau Njuguna", gender: "Male", department: "ELECTRICAL", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3591/FSL5/25S", name: "JANE NJERI MUTHEE", gender: "Male", department: "FASHION AND DESIGN", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3495/FDL5/25M", name: "ANDREW MIANO GITHAE", gender: "Male", department: "FASHION AND DESIGN", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3448/FDL5/25M", name: "CONSOLATA WANGECHI MBUI", gender: "Female", department: "FASHION AND DESIGN", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3012/FPL5/24S", name: "Maureen Wambui Njeri", gender: "Male", department: "HOSPITALITY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "1704/FPL5/24S", name: "LINDSEY WAKINI IRUNGU", gender: "Male", department: "HOSPITALITY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3618/FPL5/25S", name: "Doreen Wangui Ireri", gender: "Female", department: "HOSPITALITY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3698/FPL5-M/J26", name: "Ruth Wanjiru", gender: "Female", department: "HOSPITALITY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "1769/FPL5/24S", name: "Selestine Wanjiru Mukami", gender: "Male", department: "HOSPITALITY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "3708/FPL4-M/J26", name: "Author Mutugi Murimi", gender: "Male", department: "HOSPITALITY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "2818/FPL5/24S", name: "Cynthia Wambui Mwangi", gender: "Male", department: "HOSPITALITY", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "0900/ICTL5/24S", name: "Vivian Wayua Mutua", gender: "Female", department: "ICT", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "0913/ICTL6/24S", name: "Lydia Muchiru Nderitu", gender: "Female", department: "ICT", day: "DAY 2", date: "Thursday 12/02/2026" },
    { admNo: "2946/ICTL5/24S", name: "Violet Muringo Muriuki", gender: "Female", department: "ICT", day: "DAY 2", date: "Thursday 12/02/2026" },

    // Day 3 (Friday 13/02/2026)
    { admNo: "2957/ATL5/24S", name: "NICASIO MAINA", gender: "Male", department: "AUTOMOTIVE", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "2684/ATL6/24S", name: "DICKSON MAHINDA MURIUKI", gender: "Male", department: "AUTOMOTIVE", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "0711/ATL6/23S", name: "MOKUA TABITHA NYANCHAMA", gender: "Female", department: "AUTOMOTIVE", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3692/ATL4-M/J26", name: "Cepha Mugambi Murimi", gender: "Male", department: "AUTOMOTIVE", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "0889/ATL5/24S", name: "BONFACE MACHARIA NEDGE", gender: "Male", department: "AUTOMOTIVE", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "0893/ATL5/24S", name: "Bonface Murimi Kinyua", gender: "Male", department: "AUTOMOTIVE", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3746/WTL4-M/J26", name: "Maxwell Warui Murimi", gender: "Male", department: "AUTOMOTIVE", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "2421/BTL6/24S", name: "DRYTON FAISAL KIBAKI KA", gender: "Male", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3450/BTL5/25M", name: "Brian Githinji Miano", gender: "Male", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3691/BTL4-M/J26", name: "Murimi Maxwel Mutugi", gender: "Male", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3537/BTL5/25S", name: "RONNY MUNENE", gender: "Male", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3368/BTL5/25J", name: "WILSON MUNGAI KIMANI", gender: "Male", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3697/PL5-M/J26", name: "Sharon Njeri Wachira", gender: "Female", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "2804/BTL6/24S", name: "Austine Kang'eri", gender: "Male", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3513/BTL5/25M", name: "ERICK WACHIRA KINYUA", gender: "Male", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "0975/BTL5/24S", name: "IRUNGU CYNTHIA NJOKI", gender: "Female", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3716/BTL5-M/J26", name: "Timothy Muthii Wanjohi", gender: "Male", department: "BUILDING", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3670/COSL5-M/J26", name: "Christine Wambui Mwatha", gender: "Male", department: "COSMETOLOGY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3671/COSL6-M/J26", name: "Dorcas Nkatha Kamuru", gender: "Female", department: "COSMETOLOGY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3529/COSL4/25S", name: "FAITH WANGARI MURIMI", gender: "Female", department: "COSMETOLOGY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "0907/COSL5/24S", name: "Ivonne Wanja Ngari", gender: "Female", department: "COSMETOLOGY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3709/COSL3-M/J26", name: "Maryann Wangui Karanja", gender: "Male", department: "COSMETOLOGY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "2381/COSL6/24S", name: "Linet Waithera Wachira", gender: "Female", department: "COSMETOLOGY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3665/WETL6-M/J26", name: "Vincent Mbote Muriithi", gender: "Male", department: "ELECTRICAL", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3337/ETL5/25J", name: "Josphine Nyawira Wairimu", gender: "Female", department: "ELECTRICAL", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3486/ETL6/25M", name: "THOMAS KIMANI", gender: "Male", department: "ELECTRICAL", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "2419/ETL5/24S", name: "Rachael Muthoni Githaka", gender: "Female", department: "ELECTRICAL", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "0921/ETL6/24S", name: "AUGUSTINE RUITA", gender: "Female", department: "ELECTRICAL", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "2436/ETL5/24S", name: "MERCY CHEPKIRUI", gender: "Female", department: "ELECTRICAL", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "1774/ETL5/24S", name: "Francis Wachira Mugo", gender: "Male", department: "ELECTRICAL", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "2617/ETL5/24S", name: "ERICK MURIUKI MURIITHI", gender: "Male", department: "ELECTRICAL", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3733/ETL3-M/J26", name: "Bruce Troy Gathithiri", gender: "Male", department: "ELECTRICAL", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3612/FDL4/25S", name: "HELLEN WANJIRU MUCHIRA", gender: "Female", department: "FASHION AND DESIGN", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "2061/FDL5/24S", name: "KARIUKI BANICE MUTHONI", gender: "Female", department: "FASHION AND DESIGN", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "2225/FDL5/24S", name: "Catherine Nyambura Kabebe", gender: "Female", department: "FASHION AND DESIGN", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3064/FPL6/24S", name: "Mercy Wanjiku Mwangi", gender: "Female", department: "HOSPITALITY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "1392/FPL5/24S", name: "JACKLINE NDITI KIRANGI", gender: "Female", department: "HOSPITALITY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3206/FPL6/24S", name: "MURIMI YVONNE NYAWIRA", gender: "Female", department: "HOSPITALITY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "1391/FPL6/24S", name: "Clement Mwangi Wamaina", gender: "Male", department: "HOSPITALITY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3749/FPL4-M/J26", name: "Grace Wangechi Muriuki", gender: "Female", department: "HOSPITALITY", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "3674/ICTL5-M/J26", name: "Michael Githinji Maina", gender: "Male", department: "ICT", day: "DAY 3", date: "Friday 13/02/2026" },
    { admNo: "1013/ICTL5/24S", name: "Cynthia Wanjiru Waweru", gender: "Female", department: "ICT", day: "DAY 3", date: "Friday 13/02/2026" }
];

// DOM Elements
const introCanvas = document.getElementById('intro-canvas');
const mainContent = document.getElementById('main-content');
const busCanvas = document.getElementById('busCanvas');
const studentWave = document.getElementById('studentWave');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const searchingOverlay = document.getElementById('searchingOverlay');
const resultsContent = document.getElementById('resultsContent');
const noResults = document.getElementById('noResults');
const statusBadge = document.getElementById('statusBadge');
const detailAdmNo = document.getElementById('detailAdmNo');
const detailName = document.getElementById('detailName');
const detailGender = document.getElementById('detailGender');
const detailDept = document.getElementById('detailDept');
const detailDay = document.getElementById('detailDay');
const detailDate = document.getElementById('detailDate');
const printBtn = document.getElementById('printBtn');
const closeBtn = document.getElementById('closeBtn');
const contactLink = document.getElementById('contactLink');
const contactModal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');

// Bus Animation Variables
let ctx;
let busX = -200;
let busY = 200;
let busWidth = 180;
let busHeight = 80;
let busSpeed = 3;
let isStudentVisible = false;
let animationId;
let takeoffPhase = false;
let takeoffY = 0;
let particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.life = 100;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 2;
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.life / 100;
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Initialize Canvas
function initCanvas() {
    ctx = busCanvas.getContext('2d');
    busCanvas.width = window.innerWidth;
    busCanvas.height = window.innerHeight;
    
    // Start animation
    animateBus();
    
    // Show student after bus reaches center
    setTimeout(() => {
        isStudentVisible = true;
        studentWave.style.opacity = '1';
    }, 2000);
    
    // Start takeoff after student waves
    setTimeout(() => {
        takeoffPhase = true;
        studentWave.style.opacity = '0';
    }, 4000);
    
    // Hide intro and show main content
    setTimeout(() => {
        introCanvas.style.opacity = '0';
        introCanvas.style.pointerEvents = 'none';
        
        setTimeout(() => {
            introCanvas.classList.add('hidden');
            mainContent.classList.remove('hidden');
            document.body.style.overflow = 'auto';
        }, 1000);
    }, 6000);
}

// Animate Bus
function animateBus() {
    ctx.clearRect(0, 0, busCanvas.width, busCanvas.height);
    
    // Draw road
    ctx.fillStyle = '#374151';
    ctx.fillRect(0, busCanvas.height - 100, busCanvas.width, 100);
    
    // Draw road lines
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 4;
    ctx.setLineDash([20, 15]);
    ctx.beginPath();
    ctx.moveTo(0, busCanvas.height - 50);
    ctx.lineTo(busCanvas.width, busCanvas.height - 50);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Draw background buildings
    drawBuildings();
    
    if (!takeoffPhase) {
        // Normal bus movement
        if (busX < busCanvas.width) {
            busX += busSpeed;
        }
        
        // Create particles behind bus
        if (busX > 100 && busX < busCanvas.width - 100) {
            particles.push(new Particle(busX - 40, busY + busHeight / 2));
        }
    } else {
        // Takeoff animation
        if (takeoffY < busCanvas.height) {
            takeoffY += 8;
            busY -= 4;
            busX += 2;
            
            // Create takeoff particles
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(
                    busX + busWidth / 2 + Math.random() * 20 - 10,
                    busY + busHeight + Math.random() * 10
                ));
            }
        }
    }
    
    // Update and draw particles
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        if (particle.life <= 0) {
            particles.splice(index, 1);
        }
    });
    
    // Draw bus
    drawBus();
    
    animationId = requestAnimationFrame(animateBus);
}

function drawBuildings() {
    // Draw cityscape in background
    const buildings = [
        { x: 100, width: 60, height: 150 },
        { x: 200, width: 80, height: 180 },
        { x: 320, width: 70, height: 130 },
        { x: 430, width: 90, height: 200 },
        { x: 560, width: 60, height: 170 },
        { x: 660, width: 70, height: 140 },
        { x: 770, width: 80, height: 190 }
    ];
    
    buildings.forEach(building => {
        ctx.fillStyle = '#1f2937';
        ctx.fillRect(building.x, busCanvas.height - 100 - building.height, building.width, building.height);
        
        // Windows
        ctx.fillStyle = '#fbbf24';
        const windowCount = Math.floor(building.height / 30);
        for (let i = 0; i < windowCount; i++) {
            for (let j = 0; j < 3; j++) {
                const windowX = building.x + 10 + j * 20;
                const windowY = busCanvas.height - 100 - building.height + 10 + i * 30;
                ctx.fillRect(windowX, windowY, 8, 15);
            }
        }
    });
}

function drawBus() {
    // Bus body
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(busX, busY, busWidth, busHeight);
    
    // Bus windows
    ctx.fillStyle = '#93c5fd';
    for (let i = 0; i < 4; i++) {
        ctx.fillRect(busX + 20 + i * 35, busY + 10, 25, 25);
    }
    
    // Bus wheels
    ctx.fillStyle = '#1f2937';
    ctx.beginPath();
    ctx.arc(busX + 30, busY + busHeight, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(busX + busWidth - 30, busY + busHeight, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Wheel hubs
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(busX + 30, busY + busHeight, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(busX + busWidth - 30, busY + busHeight, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // Bus details
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(busX + 10, busY + 5, busWidth - 20, 3); // Top stripe
    ctx.fillRect(busX + 10, busY + busHeight - 5, busWidth - 20, 3); // Bottom stripe
    
    // Headlights
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(busX + busWidth, busY + 20, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(busX + busWidth, busY + busHeight - 20, 10, 0, Math.PI * 2);
    ctx.fill();
}

// Search Functionality
function searchTrainee() {
    const searchTerm = searchInput.value.trim().toUpperCase();
    
    if (!searchTerm) {
        alert('Please enter an admission number');
        return;
    }
    
    // Show results container
    resultsContainer.classList.remove('hidden');
    searchingOverlay.classList.remove('hidden');
    resultsContent.classList.add('hidden');
    noResults.classList.add('hidden');
    
    // Simulate search delay
    setTimeout(() => {
        searchingOverlay.classList.add('hidden');
        
        const trainee = traineesData.find(t => 
            t.admNo.toUpperCase() === searchTerm || 
            t.admNo.toUpperCase().includes(searchTerm)
        );
        
        if (trainee) {
            // Display trainee details
            detailAdmNo.textContent = trainee.admNo;
            detailName.textContent = trainee.name;
            detailGender.textContent = trainee.gender;
            detailDept.textContent = trainee.department;
            detailDay.textContent = trainee.day;
            detailDate.textContent = trainee.date;
            
            // Set status badge
            statusBadge.textContent = 'REGISTERED';
            statusBadge.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            resultsContent.classList.remove('hidden');
        } else {
            noResults.classList.remove('hidden');
        }
    }, 4000); // 4 second delay as requested
}

// Print Functionality
function printDetails() {
    window.print();
}

// Close Results
function closeResults() {
    resultsContainer.classList.add('hidden');
    searchInput.value = '';
}

// Contact Modal
function showContactModal() {
    contactModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    contactModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Event Listeners
window.addEventListener('load', initCanvas);
window.addEventListener('resize', () => {
    busCanvas.width = window.innerWidth;
    busCanvas.height = window.innerHeight;
});

searchBtn.addEventListener('click', searchTrainee);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchTrainee();
    }
});

printBtn.addEventListener('click', printDetails);
closeBtn.addEventListener('click', closeResults);
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    showContactModal();
});

modalClose.addEventListener('click', closeContactModal);
contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        closeContactModal();
    }
});

// Prevent context menu (right-click)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Prevent text selection
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});

// Prevent zoom gestures
document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// Prevent pinch zoom on touch devices
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// Prevent copy
document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
});

// Prevent cut
document.addEventListener('cut', (e) => {
    e.preventDefault();
    return false;
});

// Prevent paste
document.addEventListener('paste', (e) => {
    e.preventDefault();
    return false;
});

// Initialize with intro animation
document.body.style.overflow = 'hidden';
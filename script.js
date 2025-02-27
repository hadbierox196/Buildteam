let budget = 0; // Assigned budget
let boughtPlayers = []; // List of players bought
const playerListElement = document.getElementById('player-list');
const boughtListElement = document.getElementById('bought-list');
const budgetElement = document.getElementById('budget');
const circleSection = document.getElementById('circle-section');
const marketSection = document.getElementById('market-section');
const pitchSection = document.getElementById('pitch-section');

// Mock Player Data
const players = [
  
  { name: 'Andrew Robertson', role: 'LB', value: 85000000 },
  { name: 'Theo Hernández', role: 'LB', value: 75000000 },
  { name: 'Alphonso Davies', role: 'LB', value: 100000000 },
  { name: 'João Cancelo', role: 'LB', value: 95000000 },
  { name: 'Ashley Cole', role: 'LB', value: 15000000 }, // Retired
  { name: 'Roberto Carlos', role: 'LB', value: 30000000 }, // Retired
  { name: 'Marcelo', role: 'LB', value: 18000000 }, // Retired
  { name: 'Luke Shaw', role: 'LB', value: 45000000 },
  { name: 'Ben Chilwell', role: 'LB', value: 50000000 },
  { name: 'Ferland Mendy', role: 'LB', value: 40000000 },
  { name: 'Jordi Alba', role: 'LB', value: 10000000 }, // Retired
  { name: 'Nuno Mendes', role: 'LB', value: 65000000 },
  { name: 'Kieran Tierney', role: 'LB', value: 35000000 },
  { name: 'Raphaël Guerreiro', role: 'LB', value: 30000000 },
  { name: 'David Alaba', role: 'LB', value: 55000000 },
  { name: 'Alex Sandro', role: 'LB', value: 20000000 },
  { name: 'Renan Lodi', role: 'LB', value: 22000000 },
  { name: 'Leonardo Spinazzola', role: 'LB', value: 28000000 },
  { name: 'Benoît Assou-Ekotto', role: 'LB', value: 7000000 }, // Retired
  { name: 'Patrick van Aanholt', role: 'LB', value: 8000000 },
  { name: 'Rico Henry', role: 'LB', value: 16000000 },
  { name: 'Oleksandr Zinchenko', role: 'LB', value: 40000000 },
  { name: 'Alex Grimaldo', role: 'LB', value: 42000000 },
  { name: 'Sead Kolašinac', role: 'LB', value: 5000000 },
  { name: 'Junior Firpo', role: 'LB', value: 10000000 },
  { name: 'Aaron Hickey', role: 'LB', value: 15000000 },
  { name: 'Adrià Pedrosa', role: 'LB', value: 12000000 },
  { name: 'Antonee Robinson', role: 'LB', value: 14000000 },
  { name: 'Ryan Sessegnon', role: 'LB', value: 12000000 },
  { name: 'Luca Pellegrini', role: 'LB', value: 10000000 },
  { name: 'Destiny Udogie', role: 'LB', value: 30000000 },
  { name: 'Pervis Estupiñán', role: 'LB', value: 28000000 },
  { name: 'Borna Sosa', role: 'LB', value: 25000000 },
  { name: 'Adam Masina', role: 'LB', value: 6000000 },
  { name: 'Hamari Traoré', role: 'LB', value: 10000000 },
  { name: 'Javi Galán', role: 'LB', value: 20000000 },
  { name: 'Jordan Amavi', role: 'LB', value: 5000000 },
  { name: 'Victor Kristiansen', role: 'LB', value: 9000000 },
  { name: 'Arthur Masuaku', role: 'LB', value: 8000000 },
  { name: 'Maxwell Cornet', role: 'LB', value: 14000000 },
  { name: 'Jonathan Clauss', role: 'LB', value: 12000000 },
  { name: 'Rayan Aït-Nouri', role: 'LB', value: 20000000 },
  { name: 'Robin Gosens', role: 'LB', value: 18000000 },
  { name: 'José Gayà', role: 'LB', value: 30000000 },
  { name: 'Johan Mojica', role: 'LB', value: 7500000 },
  { name: 'Álex Moreno', role: 'LB', value: 18000000 },
  { name: 'Daley Blind', role: 'LB', value: 12000000 }, // Retired
  { name: 'Leighton Baines', role: 'LB', value: 7000000 }, // Retired
  { name: 'Virgil van Dijk', role: 'CB', value: 75000000 },
  { name: 'Rúben Dias', role: 'CB', value: 80000000 },
  { name: 'Raphaël Varane', role: 'CB', value: 50000000 },
  { name: 'David Alaba', role: 'CB', value: 55000000 },
  { name: 'Marquinhos', role: 'CB', value: 70000000 },
  { name: 'Sergio Ramos', role: 'CB', value: 20000000 }, // Retired
  { name: 'Thiago Silva', role: 'CB', value: 10000000 },
  { name: 'Alessandro Nesta', role: 'CB', value: 15000000 }, // Retired
  { name: 'Paolo Maldini', role: 'CB', value: 20000000 }, // Retired
  { name: 'Giorgio Chiellini', role: 'CB', value: 5000000 }, // Retired
  { name: 'Aymeric Laporte', role: 'CB', value: 45000000 },
  { name: 'John Stones', role: 'CB', value: 60000000 },
  { name: 'Antonio Rüdiger', role: 'CB', value: 50000000 },
  { name: 'Kalidou Koulibaly', role: 'CB', value: 40000000 },
  { name: 'Eder Militão', role: 'CB', value: 65000000 },
  { name: 'Jules Koundé', role: 'CB', value: 55000000 },
  { name: 'Matthijs de Ligt', role: 'CB', value: 70000000 },
  { name: 'Milan Škriniar', role: 'CB', value: 45000000 },
  { name: 'Ronald Araújo', role: 'CB', value: 50000000 },
  { name: 'Presnel Kimpembe', role: 'CB', value: 40000000 },
  { name: 'Niklas Süle', role: 'CB', value: 35000000 },
  { name: 'Stefan de Vrij', role: 'CB', value: 25000000 },
  { name: 'Ben White', role: 'CB', value: 40000000 },
  { name: 'William Saliba', role: 'CB', value: 60000000 },
  { name: 'Fikayo Tomori', role: 'CB', value: 45000000 },
  { name: 'Cristian Romero', role: 'CB', value: 55000000 },
  { name: 'Joe Gomez', role: 'CB', value: 25000000 },
  { name: 'Marc Bartra', role: 'CB', value: 10000000 },
  { name: 'Victor Lindelöf', role: 'CB', value: 20000000 },
  { name: 'Clement Lenglet', role: 'CB', value: 15000000 },
  { name: 'Pau Torres', role: 'CB', value: 50000000 },
  { name: 'Nathan Aké', role: 'CB', value: 35000000 },
  { name: 'Ibrahima Konaté', role: 'CB', value: 45000000 },
  { name: 'Philippe Senderos', role: 'CB', value: 5000000 }, // Retired
  { name: 'Jerome Boateng', role: 'CB', value: 8000000 }, // Retired
  { name: 'Laurent Koscielny', role: 'CB', value: 7000000 }, // Retired
  { name: 'Nemanja Vidić', role: 'CB', value: 10000000 }, // Retired
  { name: 'Rio Ferdinand', role: 'CB', value: 15000000 }, // Retired
  { name: 'Jamie Carragher', role: 'CB', value: 8000000 }, // Retired
  { name: 'Phil Jones', role: 'CB', value: 3000000 },
  { name: 'Harry Maguire', role: 'CB', value: 25000000 },
  { name: 'James Tarkowski', role: 'CB', value: 20000000 },
  { name: 'Rob Holding', role: 'CB', value: 15000000 },
  { name: 'Kurt Zouma', role: 'CB', value: 25000000 },
  { name: 'Conor Coady', role: 'CB', value: 20000000 },
  { name: 'Evan Ndicka', role: 'CB', value: 30000000 },
  { name: 'Chris Smalling', role: 'CB', value: 10000000 },
  { name: 'Tyrone Mings', role: 'CB', value: 18000000 },

  { name: 'Alessandro Bastoni', role: 'CB', value: 70000000 },
  { name: 'Dayot Upamecano', role: 'CB', value: 60000000 },
  { name: 'Kalidou Koulibaly', role: 'CB', value: 35000000 },
  { name: 'Josko Gvardiol', role: 'CB', value: 85000000 },
  { name: 'Wesley Fofana', role: 'CB', value: 65000000 },
  { name: 'Sven Botman', role: 'CB', value: 50000000 },
  { name: 'Lissandro Martínez', role: 'CB', value: 55000000 },
  { name: 'Eric García', role: 'CB', value: 25000000 },
  { name: 'Manuel Akanji', role: 'CB', value: 35000000 },
  { name: 'Trevoh Chalobah', role: 'CB', value: 20000000 },
  { name: 'Andreas Christensen', role: 'CB', value: 30000000 },
  { name: 'Levi Colwill', role: 'CB', value: 40000000 },
  { name: 'Danilo Pereira', role: 'CB', value: 18000000 },
  { name: 'Ben Mee', role: 'CB', value: 8000000 },
  { name: 'Craig Dawson', role: 'CB', value: 6000000 },
  { name: 'Michael Keane', role: 'CB', value: 12000000 },
  { name: 'Jonny Evans', role: 'CB', value: 5000000 },
  { name: 'Jannik Vestergaard', role: 'CB', value: 9000000 },
  { name: 'James Tomkins', role: 'CB', value: 3000000 },
  { name: 'Gary Cahill', role: 'CB', value: 8000000 }, // Retired
  { name: 'Mats Hummels', role: 'CB', value: 10000000 },
  { name: 'Neven Subotić', role: 'CB', value: 4000000 }, // Retired
  { name: 'Pepe', role: 'CB', value: 3000000 },
  { name: 'Carlos Puyol', role: 'CB', value: 20000000 }, // Retired
  { name: 'Fabio Cannavaro', role: 'CB', value: 25000000 }, // Retired
  { name: 'Diego Godín', role: 'CB', value: 5000000 }, // Retired
  { name: 'Stefan Savic', role: 'CB', value: 10000000 },
  { name: 'Nikola Milenković', role: 'CB', value: 20000000 },
  { name: 'Caglar Söyüncü', role: 'CB', value: 18000000 },
  { name: 'Kaan Ayhan', role: 'CB', value: 7000000 },
  { name: 'Robin Koch', role: 'CB', value: 12000000 },
  { name: 'Romain Saïss', role: 'CB', value: 8000000 },
  { name: 'Takehiro Tomiyasu', role: 'CB', value: 25000000 },
  { name: 'Diego Carlos', role: 'CB', value: 20000000 },
  { name: 'Jason Denayer', role: 'CB', value: 10000000 },
  { name: 'Marcos Senesi', role: 'CB', value: 25000000 },
  { name: 'Ezri Konsa', role: 'CB', value: 20000000 },
  { name: 'Issa Diop', role: 'CB', value: 15000000 },
  { name: 'Kamil Glik', role: 'CB', value: 3000000 }, // Retired
  { name: 'Martin Škrtel', role: 'CB', value: 4000000 }, // Retired
  { name: 'Ozan Kabak', role: 'CB', value: 12000000 },
  { name: 'Jean-Clair Todibo', role: 'CB', value: 35000000 },
  { name: 'Chris Richards', role: 'CB', value: 15000000 },
  { name: 'Abdou Diallo', role: 'CB', value: 18000000 },
  { name: 'Kim Min-Jae', role: 'CB', value: 70000000 },
  { name: 'Harry Souttar', role: 'CB', value: 12000000 },
  { name: 'Jack O’Connell', role: 'CB', value: 5000000 },
  { name: 'Fernando Hierro', role: 'CB', value: 20000000 }, // Retired
  { name: 'Franco Baresi', role: 'CB', value: 25000000 }, // Retired

  { name: 'Trent Alexander-Arnold', role: 'RB', value: 100000000 },
  { name: 'Achraf Hakimi', role: 'RB', value: 85000000 },
  { name: 'João Cancelo', role: 'RB', value: 70000000 },
  { name: 'Reece James', role: 'RB', value: 65000000 },
  { name: 'Dani Carvajal', role: 'RB', value: 50000000 },
  { name: 'Kyle Walker', role: 'RB', value: 60000000 },
  { name: 'Kieran Trippier', role: 'RB', value: 45000000 },
  { name: 'Juanfran', role: 'RB', value: 25000000 }, // Retired
  { name: 'Héctor Bellerín', role: 'RB', value: 30000000 },
  { name: 'Serge Aurier', role: 'RB', value: 20000000 },
  { name: 'Benjamin Pavard', role: 'RB', value: 40000000 },
  { name: 'Ricardo Pereira', role: 'RB', value: 35000000 },
  { name: 'Timo Baumgartl', role: 'RB', value: 10000000 },
  { name: 'Luca Pellegrini', role: 'RB', value: 15000000 },
  { name: 'Bouna Sarr', role: 'RB', value: 20000000 },
  { name: 'Nélson Semedo', role: 'RB', value: 35000000 },
  { name: 'Matty Cash', role: 'RB', value: 25000000 },
  { name: 'Tariq Lamptey', role: 'RB', value: 20000000 },
  { name: 'Max Aarons', role: 'RB', value: 30000000 },
  { name: 'Jordi Alba', role: 'RB', value: 40000000 },
  { name: 'James Tavernier', role: 'RB', value: 15000000 },
  { name: 'Kenny Lala', role: 'RB', value: 8000000 },
  { name: 'Dimitrios Giannoulis', role: 'RB', value: 12000000 },
  { name: 'Joey van der Berg', role: 'RB', value: 5000000 },
  { name: 'Julian Brandt', role: 'RB', value: 25000000 },
  { name: 'Valentin Rongier', role: 'RB', value: 15000000 },
  { name: 'Alvaro Odriozola', role: 'RB', value: 15000000 },
  { name: 'Andrea Conti', role: 'RB', value: 10000000 },
  { name: 'Pablo Maffeo', role: 'RB', value: 10000000 },
  { name: 'João Mário', role: 'RB', value: 20000000 },
  { name: 'Pervis Estupiñán', role: 'RB', value: 30000000 },
  { name: 'Matheus Santos', role: 'RB', value: 25000000 },
  { name: 'Cristiano Piccini', role: 'RB', value: 8000000 },
  { name: 'Sergi Roberto', role: 'RB', value: 35000000 },
  { name: 'Riccardo Calafiori', role: 'RB', value: 15000000 },
  { name: 'Timo Fosu-Mensah', role: 'RB', value: 10000000 },
  { name: 'Dujon Sterling', role: 'RB', value: 5000000 },
  { name: 'Omar Richards', role: 'RB', value: 8000000 },
  { name: 'Mohammed Fatau', role: 'RB', value: 3000000 },
  { name: 'Sepp van den Berg', role: 'RB', value: 12000000 },
  { name: 'Jovanovic Aleksandar', role: 'RB', value: 15000000 },
  { name: 'Hugo Mallo', role: 'RB', value: 10000000 },
  { name: 'Jérôme Roussillon', role: 'RB', value: 10000000 },
  { name: 'Ricardo Rodriguez', role: 'RB', value: 5000000 },
  { name: 'Zeki Çelik', role: 'RB', value: 25000000 },
  { name: 'César Azpilicueta', role: 'RB', value: 25000000 },
  { name: 'Bastian Schweinsteiger', role: 'RB', value: 30000000 }, // Retired
  { name: 'Hugo Lloris', role: 'RB', value: 35000000 }, // Retired
  { name: 'Giorgio Chiellini', role: 'RB', value: 35000000 }, // Retired
  { name: 'Julian Brandt', role: 'RB', value: 25000000 },
  { name: 'N’Golo Kanté', role: 'CDM', value: 95000000 },
  { name: 'Joshua Kimmich', role: 'CDM', value: 90000000 },
  { name: 'Casemiro', role: 'CDM', value: 75000000 },
  { name: 'Fabinho', role: 'CDM', value: 70000000 },
  { name: 'Rodri', role: 'CDM', value: 65000000 },
  { name: 'Declan Rice', role: 'CDM', value: 60000000 },
  { name: 'Frenkie de Jong', role: 'CDM', value: 85000000 },
  { name: 'Sergio Busquets', role: 'CDM', value: 50000000 },
  { name: 'Jorginho', role: 'CDM', value: 55000000 },
  { name: 'Wilfred Ndidi', role: 'CDM', value: 45000000 },
  { name: 'Leandro Paredes', role: 'CDM', value: 35000000 },
  { name: 'Pierre-Emile Højbjerg', role: 'CDM', value: 40000000 },
  { name: 'Tanguy Ndombele', role: 'CDM', value: 30000000 },
  { name: 'Allan', role: 'CDM', value: 25000000 },
  { name: 'Moussa Sissoko', role: 'CDM', value: 20000000 },
  { name: 'Ruben Loftus-Cheek', role: 'CDM', value: 20000000 },
  { name: 'Jean-Michael Seri', role: 'CDM', value: 18000000 },
  { name: 'Adrien Rabiot', role: 'CDM', value: 35000000 },
  { name: 'Marcelo Brozović', role: 'CDM', value: 40000000 },
  { name: 'Mohamed Elneny', role: 'CDM', value: 15000000 },
  { name: 'Julián Weigl', role: 'CDM', value: 25000000 },
  { name: 'Boubacar Kamara', role: 'CDM', value: 30000000 },
  { name: 'Yves Bissouma', role: 'CDM', value: 35000000 },
  { name: 'Ramires', role: 'CDM', value: 20000000 }, // Retired
  { name: 'Xabi Alonso', role: 'CDM', value: 45000000 }, // Retired
  { name: 'Claude Makélélé', role: 'CDM', value: 50000000 }, // Retired
  { name: 'Patrick Vieira', role: 'CDM', value: 60000000 }, // Retired
  { name: 'Steven Gerrard', role: 'CDM', value: 75000000 }, // Retired
  { name: 'Michael Essien', role: 'CDM', value: 60000000 }, // Retired
  { name: 'Cesc Fàbregas', role: 'CDM', value: 55000000 }, // Retired
  { name: 'Tomas Rosicky', role: 'CDM', value: 40000000 }, // Retired
  { name: 'Javier Mascherano', role: 'CDM', value: 50000000 }, // Retired
  { name: 'Bastian Schweinsteiger', role: 'CDM', value: 55000000 }, // Retired
  { name: 'Andrea Pirlo', role: 'CDM', value: 60000000 }, // Retired
  { name: 'Niko Kovač', role: 'CDM', value: 45000000 }, // Retired
  { name: 'Thomas Partey', role: 'CDM', value: 30000000 },
  { name: 'Emre Can', role: 'CDM', value: 25000000 },
  { name: 'Douglas Luiz', role: 'CDM', value: 25000000 },
  { name: 'Ruben Neves', role: 'CDM', value: 35000000 },
  { name: 'Nico Domínguez', role: 'CDM', value: 20000000 },
  { name: 'Marten de Roon', role: 'CDM', value: 25000000 },
  { name: 'Wojciech Szczęsny', role: 'CDM', value: 15000000 },
  { name: 'Hakan Çalhanoğlu', role: 'CDM', value: 20000000 },
  { name: 'Pablo Fornals', role: 'CDM', value: 30000000 },
  { name: 'Sandro Tonali', role: 'CDM', value: 45000000 },
  { name: 'Ismael Bennacer', role: 'CDM', value: 40000000 },
  { name: 'Luka Modrić', role: 'CDM', value: 50000000 },
  { name: 'Jens Hegeler', role: 'CDM', value: 12000000 },
  { name: 'Gonzalo Castro', role: 'CDM', value: 15000000 },
  { name: 'Mikkel Damsgaard', role: 'CDM', value: 20000000 },
  { name: 'Danilo Pereira', role: 'CDM', value: 35000000 },
  { name: 'Yacine Brahimi', role: 'CDM', value: 25000000 },
  { name: 'William Carvalho', role: 'CDM', value: 30000000 },
  { name: 'Marko Grujić', role: 'CDM', value: 20000000 },
  { name: 'Santi Cazorla', role: 'CDM', value: 25000000 },
  { name: 'Thomas Müller', role: 'CM', value: 70000000 },
  { name: 'Giovani Lo Celso', role: 'CM', value: 35000000 },
  { name: 'Marek Hamšík', role: 'CM', value: 45000000 }, // Retired
  { name: 'Arthur Melo', role: 'CM', value: 30000000 },
  { name: 'Emre Can', role: 'CM', value: 40000000 },
  { name: 'Andreas Christensen', role: 'CM', value: 30000000 },
  { name: 'Adrien Rabiot', role: 'CM', value: 50000000 },
  { name: 'Dani Ceballos', role: 'CM', value: 40000000 },
  { name: 'Oliver Skipp', role: 'CM', value: 30000000 },
  { name: 'Eder Militão', role: 'CM', value: 35000000 },
  { name: 'Pierre-Emile Højbjerg', role: 'CM', value: 40000000 },
  { name: 'Boubacar Kamara', role: 'CM', value: 40000000 },
  { name: 'Tanguy Ndombele', role: 'CM', value: 30000000 },
  { name: 'Moussa Sissoko', role: 'CM', value: 25000000 },
  { name: 'Sami Khedira', role: 'CM', value: 45000000 }, // Retired
  { name: 'Jean Michaël Seri', role: 'CM', value: 25000000 },
  { name: 'Koke', role: 'CM', value: 65000000 },
  { name: 'David Silva', role: 'CM', value: 55000000 }, // Retired
  { name: 'Aaron Ramsey', role: 'CM', value: 40000000 },
  { name: 'Mohamed Elneny', role: 'CM', value: 25000000 },
  { name: 'Dani Olmo', role: 'CM', value: 45000000 },
  { name: 'João Moutinho', role: 'CM', value: 30000000 },
  { name: 'Lucas Torreira', role: 'CM', value: 30000000 },
  { name: 'Miralem Pjanic', role: 'CM', value: 35000000 },
  { name: 'Javi Martínez', role: 'CM', value: 40000000 },
  { name: 'Nicolò Barella', role: 'CM', value: 60000000 },
  { name: 'David Brooks', role: 'CM', value: 30000000 },
  { name: 'Oliver Giroud', role: 'CM', value: 25000000 },
  { name: 'Marcelo Brozović', role: 'CM', value: 50000000 },
  { name: 'Carlos Soler', role: 'CM', value: 45000000 },
  { name: 'Ruben Loftus-Cheek', role: 'CM', value: 40000000 },
  { name: 'Kamil Jacek', role: 'CM', value: 30000000 },
  { name: 'Franck Kessié', role: 'CM', value: 60000000 },
  { name: 'Wylan Cyprien', role: 'CM', value: 20000000 },
  { name: 'Antonio Sanabria', role: 'CM', value: 25000000 },
  { name: 'Jürgen Kramny', role: 'CM', value: 25000000 },
  { name: 'Azzedine Ounahi', role: 'CM', value: 30000000 },
  { name: 'Denis Zakaria', role: 'CM', value: 40000000 },
  { name: 'Julian Brandt', role: 'CM', value: 50000000 },
  { name: 'Yusuf Yazıcı', role: 'CM', value: 25000000 },
  { name: 'Rafael Camacho', role: 'CM', value: 20000000 },
  { name: 'Fred', role: 'CM', value: 45000000 },
  { name: 'Jude Bellingham', role: 'CM', value: 100000000 },
  { name: 'Kieran Dowell', role: 'CM', value: 25000000 },
  { name: 'Valentin Rongier', role: 'CM', value: 30000000 },
  { name: 'Marvin Plattenhardt', role: 'CM', value: 25000000 },

  { name: 'Kevin De Bruyne', role: 'CM', value: 120000000 },
  { name: 'Luka Modrić', role: 'CM', value: 80000000 },
  { name: 'Bruno Fernandes', role: 'CM', value: 95000000 },
  { name: 'Paul Pogba', role: 'CM', value: 70000000 },
  { name: 'Frenkie de Jong', role: 'CM', value: 85000000 },
  { name: 'Marco Verratti', role: 'CM', value: 75000000 },
  { name: 'Toni Kroos', role: 'CM', value: 60000000 },
  { name: 'Phil Foden', role: 'CM', value: 75000000 },
  { name: 'Christian Pulisic', role: 'CM', value: 45000000 },
  { name: 'Declan Rice', role: 'CM', value: 70000000 },
  { name: 'Jordan Henderson', role: 'CM', value: 50000000 },
  { name: 'Nabil Fekir', role: 'CM', value: 40000000 },
  { name: 'Houssem Aouar', role: 'CM', value: 50000000 },
  { name: 'Martin Ødegaard', role: 'CM', value: 65000000 },
  { name: 'James Maddison', role: 'CM', value: 55000000 },
  { name: 'Dani Olmo', role: 'CM', value: 40000000 },
  { name: 'Jack Grealish', role: 'CM', value: 70000000 },
  { name: 'Rodrigo Bentancur', role: 'CM', value: 40000000 },
  { name: 'Marcos Llorente', role: 'CM', value: 60000000 },
  { name: 'Isco', role: 'CM', value: 35000000 },
  { name: 'Gareth Bale', role: 'CM', value: 25000000 }, // Retired
  { name: 'Cesc Fàbregas', role: 'CM', value: 60000000 }, // Retired
  { name: 'Xavi Hernández', role: 'CM', value: 70000000 }, // Retired
  { name: 'Andrés Iniesta', role: 'CM', value: 75000000 }, // Retired
  { name: 'Steven Gerrard', role: 'CM', value: 85000000 }, // Retired
  { name: 'Frank Lampard', role: 'CM', value: 90000000 }, // Retired
  { name: 'Claude Makélélé', role: 'CM', value: 50000000 }, // Retired
  { name: 'Michael Essien', role: 'CM', value: 55000000 }, // Retired
    { name: 'Matteo Politano', role: 'RW', value: 40000000 },
  { name: 'Josef Martínez', role: 'RW', value: 35000000 },
  { name: 'Johan Vásquez', role: 'RW', value: 35000000 },
  { name: 'Alexandre Pato', role: 'RW', value: 30000000 }, // Retired
  { name: 'Dani Alves', role: 'RW', value: 40000000 }, // Retired
  { name: 'Ángel Correa', role: 'RW', value: 45000000 },
  { name: 'Gerard Moreno', role: 'RW', value: 45000000 },
  { name: 'Luis Suárez', role: 'RW', value: 60000000 } ,

  { name: 'Gonzalo Higuaín', role: 'ST', value: 45000000 }, // Retired
  { name: 'Carlos Tévez', role: 'ST', value: 40000000 }, // Retired
  { name: 'Javier Hernández', role: 'ST', value: 35000000 },
  { name: 'Martin Ødegaard', role: 'ST', value: 40000000 },
  { name: 'Youssouf En-Nesyri', role: 'ST', value: 5000000 },
  { name: 'Duván Zapata', role: 'ST', value: 5000000 },
  { name: 'Christian Benteke', role: 'ST', value: 3500000 },
  { name: 'Raheem Sterling', role: 'ST', value: 40000000 },
  { name: 'Santi Cazorla', role: 'ST', value: 3000000 }, // Retired
  { name: 'Luis Muriel', role: 'ST', value: 5000000 },
  { name: 'Aleksandar Mitrović', role: 'ST', value: 45000000 },
  { name: 'Andrej Kramarić', role: 'ST', value: 4000000 },
  { name: 'Antoine Griezmann', role: 'ST', value: 70000000 },
  { name: 'Bebeto', role: 'ST', value: 3000000 }, // Retired
  { name: 'Raul Jimenez', role: 'ST', value: 45000000 },
  { name: 'Alexandre Lacazette', role: 'ST', value: 45000000 },
  { name: 'Lucas Pérez', role: 'ST', value: 30000000 },
  { name: 'Diego Costa', role: 'ST', value: 50000000 }, // Retired
  { name: 'Edinson Cavani', role: 'ST', value: 65000000 }, // Retired
  { name: 'João Félix', role: 'ST', value: 45000000 },
  { name: 'Timo Werner', role: 'ST', value: 50000000 },
  { name: 'Darwin Núñez', role: 'ST', value: 55000000 },
  { name: 'Joshua Zirkzee', role: 'ST', value: 35000000 },
  { name: 'Olivier Giroud', role: 'ST', value: 40000000 },
  { name: 'Daniel Sturridge', role: 'ST', value: 20000000 }, // Retired
  { name: 'Marco Borriello', role: 'ST', value: 30000000 }, // Retired
  { name: 'Karlan Grant', role: 'ST', value: 30000000 },
  { name: 'Patrik Schick', role: 'ST', value: 50000000 },
  { name: 'Marek Hamšík', role: 'ST', value: 30000000 }, // Retired
  { name: 'Eder', role: 'ST', value: 35000000 }, // Retired
  { name: 'Mauro Icardi', role: 'ST', value: 50000000 },
  { name: 'Bojan Krkić', role: 'ST', value: 25000000 }, // Retired
  { name: 'Héctor Moreno', role: 'ST', value: 35000000 },
  { name: 'Fernando Llorente', role: 'ST', value: 40000000 }, // Retired
  { name: 'Romelu Lukaku', role: 'ST', value: 55000000 },
  { name: 'Sebastián Haller', role: 'ST', value: 50000000 },
  { name: 'Jean-Pierre Papin', role: 'ST', value: 30000000 }, // Retired
  { name: 'Tammy Abraham', role: 'ST', value: 5000000 },
  { name: 'Vincent Aboubakar', role: 'ST', value: 10000000 },
  { name: 'Iago Aspas', role: 'ST', value: 4000000 },
  { name: 'Álvaro Morata', role: 'ST', value: 20000000 },
  { name: 'Fernando Torres', role: 'ST', value: 60000000 }, // Retired
  { name: 'Eduardo Vargas', role: 'ST', value: 4000000 },
  { name: 'Tomas Pekhart', role: 'ST', value: 2500000 },
  { name: 'Erling Haaland', role: 'ST', value: 100000000 },
  { name: 'Max Kruse', role: 'ST', value: 3000000 },
  { name: 'Mame Biram Diouf', role: 'ST', value: 2500000 },
  { name: 'Diego Rivas', role: 'ST', value: 3000000 },

  { name: 'Jan Oblak', role: 'GK', value: 60000000 },
  { name: 'Alisson Becker', role: 'GK', value: 60000000 },
  { name: 'Thibaut Courtois', role: 'GK', value: 6000000 },
  { name: 'Manuel Neuer', role: 'GK', value: 60000000 },
  { name: 'Keylor Navas', role: 'GK', value: 50000000 },
  { name: 'Marc-André ter Stegen', role: 'GK', value: 50000000 },
  { name: 'Gianluigi Donnarumma', role: 'GK', value: 50000000 },
  { name: 'Hugo Lloris', role: 'GK', value: 40000000 },
  { name: 'David De Gea', role: 'GK', value: 60000000 },
  { name: 'Kasper Schmeichel', role: 'GK', value: 50000000 },
  { name: 'Ederson', role: 'GK', value: 70000000 },
  { name: 'Nick Pope', role: 'GK', value: 20000000 },
  { name: 'Jordan Pickford', role: 'GK', value: 30000000 },
  { name: 'Wojciech Szczęsny', role: 'GK', value: 50000000 },
  { name: 'Mike Maignan', role: 'GK', value: 55000000 },
  { name: 'Rui Patrício', role: 'GK', value: 3500000 },
  { name: 'Emiliano Martínez', role: 'GK', value: 45000000 },
  { name: 'Bernd Leno', role: 'GK', value: 3000000 },
  { name: 'Sergio Romero', role: 'GK', value: 25000000 }, // Retired
  { name: 'Gianluigi Buffon', role: 'GK', value: 35000000 }, // Retired
  { name: 'Alphonse Areola', role: 'GK', value: 3000000 },
  { name: 'Keylor Navas', role: 'GK', value: 4500000 },
  { name: 'Jasper Cillessen', role: 'GK', value: 2500000 },
  { name: 'Tim Krul', role: 'GK', value: 25000000 },
  { name: 'Loris Karius', role: 'GK', value: 3000000 },
  { name: 'Marten Stekelenburg', role: 'GK', value: 2000000 }, // Retired
  { name: 'Ciprian Tătărușanu', role: 'GK', value: 2500000 },
  { name: 'Roman Bürki', role: 'GK', value: 3000000 },
  { name: 'Aitor Fernández', role: 'GK', value: 2500000 },
  { name: 'Ben Foster', role: 'GK', value: 10000000 }, // Retired
  { name: 'Karl Darlow', role: 'GK', value: 2000000 },
  { name: 'Lucas Hradecky', role: 'GK', value: 3000000 },
  { name: 'Alessio Cragno', role: 'GK', value: 2500000 },
  { name: 'Daniel Bachmann', role: 'GK', value: 2500000 },
  { name: 'Giovani López', role: 'GK', value: 2000000 },
  { name: 'Luca Zidane', role: 'GK', value: 1500000 },
  { name: 'David Soria', role: 'GK', value: 5000000 },
  { name: 'Álex Remiro', role: 'GK', value: 3000000 },
  { name: 'Kamil Grabara', role: 'GK', value: 5000000 },
  { name: 'Oliver Baumann', role: 'GK', value: 20000000 },
  { name: 'Andrés Fernández', role: 'GK', value: 2000000 },
  { name: 'Fernando Muslera', role: 'GK', value: 3000000 },
  { name: 'Diego López', role: 'GK', value: 25000000 }, // Retired
  { name: 'Miguel Ángel Moyá', role: 'GK', value: 20000000 }, // Retired
  { name: 'Guillermo Ochoa', role: 'GK', value: 5000000 },
  { name: 'Ricardo López', role: 'GK', value: 5000000 },
  { name: 'Alex McCarthy', role: 'GK', value: 2000000 },
  { name: 'Daniel Iversen', role: 'GK', value: 5000000 },
  { name: 'Roberto Jiménez', role: 'GK', value: 1000000 }
];

// Initialize the Game
window.onload = () => {
  const circle = document.querySelector('.circle-container');

  // Click the circle to reveal budget
  circle.addEventListener('click', () => {
    budget = Math.floor(Math.random() * (1_000_000_000 - 10_000_000 + 1)) + 10_000_000;
    document.getElementById('money').textContent = `$${budget.toLocaleString()}`;

    // After 2 seconds, transition to transfer market
    setTimeout(() => {
      circleSection.classList.add('hidden');
      marketSection.classList.remove('hidden');
      budgetElement.textContent = `$${budget.toLocaleString()}`;
      renderPlayerList(players); // Render all players initially
    }, 2000);
  });

  // Proceed to Pitch Section
  const proceedButton = document.createElement('button');
  proceedButton.textContent = 'Proceed to Pitch';
  proceedButton.className = 'proceed-button';
  marketSection.appendChild(proceedButton);

  proceedButton.addEventListener('click', () => {
    if (boughtPlayers.length > 0) {
      marketSection.classList.add('hidden');
      renderPitch(boughtPlayers);
      pitchSection.classList.remove('hidden');
    } else {
      alert('You need to buy at least one player to proceed!');
    }
  });

  // Set up search by name, role, and price
  setupSearchFilters();
};

// Setup search filters
function setupSearchFilters() {
  const searchContainer = document.querySelector('.search-container');

  // Search by name
  const nameSearch = document.createElement('input');
  nameSearch.type = 'text';
  nameSearch.placeholder = 'Search for a player by name';
  nameSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(searchTerm)
    );
    renderPlayerList(filteredPlayers);
  });

  // Search by role
  const roleSearch = document.createElement('input');
  roleSearch.type = 'text';
  roleSearch.placeholder = 'Search by role (e.g., Forward)';
  roleSearch.addEventListener('input', (e) => {
    const roleTerm = e.target.value.trim().toLowerCase();
    const filteredPlayers = players.filter(player =>
      player.role.toLowerCase().includes(roleTerm)
    );
    renderPlayerList(filteredPlayers);
  });

  // Search by price
  const priceSearch = document.createElement('input');
  priceSearch.type = 'number';
  priceSearch.placeholder = 'Search by max price';
  priceSearch.addEventListener('input', (e) => {
    const maxPrice = parseInt(e.target.value, 10);
    if (!isNaN(maxPrice)) {
      const filteredPlayers = players.filter(player => player.value <= maxPrice);
      renderPlayerList(filteredPlayers);
    }
  });

  // Add all search inputs to the container
  searchContainer.appendChild(nameSearch);
  searchContainer.appendChild(roleSearch);
  searchContainer.appendChild(priceSearch);
}

// Render the player list
function renderPlayerList(players) {
  playerListElement.innerHTML = ''; // Clear the list

  if (players.length === 0) {
    playerListElement.innerHTML = '<p>No players found.</p>';
    return;
  }

  players.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';

    const name = document.createElement('span');
    name.textContent = player.name;

    const role = document.createElement('span');
    role.textContent = `Role: ${player.role}`;

    const value = document.createElement('span');
    value.textContent = `$${player.value.toLocaleString()}`;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.disabled = player.value > budget;

    buyButton.addEventListener('click', () => {
      if (player.value <= budget) {
        budget -= player.value;
        budgetElement.textContent = `$${budget.toLocaleString()}`;
        buyButton.disabled = true;
        boughtPlayers.push(player);
        updateBoughtList();
      }
    });

    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(value);
    card.appendChild(buyButton);
    playerListElement.appendChild(card);
  });
}

// Update the list of bought players
function updateBoughtList() {
  boughtListElement.innerHTML = '<h2>Players Bought:</h2>';
  boughtPlayers.forEach(player => {
    const playerItem = document.createElement('div');
    playerItem.textContent = `${player.name} - ${player.role} - $${player.value.toLocaleString()}`;
    boughtListElement.appendChild(playerItem);
  });
}

// Render the pitch
function renderPitch(players) {
  const pitch = pitchSection.querySelector('.pitch');
  pitch.innerHTML = '';
  players.forEach((player, index) => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.id = `player-${index}`;
    card.textContent = `${player.name} - ${player.role}`;
    card.draggable = true;

    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
    });

    pitch.appendChild(card);
  });

  // Enable dropping onto the pitch
  pitch.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  pitch.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);
    draggedElement.style.position = 'absolute';
    draggedElement.style.left = `${e.offsetX - (draggedElement.offsetWidth / 2)}px`;
    draggedElement.style.top = `${e.offsetY - (draggedElement.offsetHeight / 2)}px`;
  });
                              }
  

export default function Information() {
    return (
        <>
            <tr>
                <td>FIRST NAME</td>
                <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
                <td>FIRST NAME</td>
                <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
                <td>DATE OF BIRTH</td>
                <td>
                    <select name="" id="">
                        <option>Day:</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    <select>
                        <option>Month:</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <select>
                        <option>Year:</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>EMAIL ID</td>
                <td><input type="email" name="" id="" /></td>
            </tr>
            <tr>
                <td>MOBILE NUMBER</td>
                <td><input type="text" name="" id="" /> (10 digit number)</td>
            </tr>
            <tr>
                <td>GENDER</td>
                <td>
                    Male <input type="radio" name="" id="" />
                    Female <input type="radio" name="gender"></input>
                </td>
            </tr>
            <tr>
                <td>ADDRESS</td>
                <td><textarea rows="4" cols="30"></textarea></td>
            </tr>
            <tr>
                <td>CITY</td>
                <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
                <td>PIN CODE</td>
                <td><input type="text" name="" id="" /> (6 digit number)</td>
            </tr>
            <tr>
                <td>STATE</td>
                <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
            </tr>
            <tr>
                <td>COUNTRY</td>
                <td>
                    <input type="text" name="" id="" />
                </td>
            </tr>
            <tr>
                <td>HOBBIES</td>
                <td>
                    Drawing <input type="checkbox" name="" id="" />
                    Singing <input type="checkbox" name="" id="" />
                    Dancing <input type="checkbox" name="" id="" />
                    Sketching <input type="checkbox" name="" id="" />
                    <br />
                    Others <input type="checkbox" name="" id="" /> 
                    <input type="text" name="" id="" />
                </td>
            </tr>
        </>
    );
}
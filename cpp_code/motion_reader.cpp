#include <iostream>
#include <fstream>
#include <vector>
#include <nlohmann/json.hpp>  // Include the nlohmann JSON library
#include <chrono>
#include <thread>
#include <sys/stat.h>

using json = nlohmann::json;
using namespace std;

// Function to read and parse the JSON file
vector<vector<float>> read_json_file(const string& file_path) {
    vector<vector<float>> array_data;

    // Open the JSON file
    ifstream file(file_path);
    if (!file.is_open()) {
        cerr << "Could not open the file: " << file_path << endl;
        return array_data;
    }

    // Parse the JSON file
    json j;
    file >> j;

    // Read the 2D array from the JSON file
    for (const auto& row : j) {
        vector<float> array_row;
        for (const auto& value : row) {
            array_row.push_back(value);
        }
        array_data.push_back(array_row);
    }

    return array_data;
}

// Function to check the last modification time of the file
time_t get_last_modification_time(const string& file_path) {
    struct stat file_stat;
    if (stat(file_path.c_str(), &file_stat) != 0) {
        cerr << "Error checking file modification time." << endl;
        return 0;
    }
    return file_stat.st_mtime;
}

int main() {
    string file_path = "../json_data/motion_data.json"; // JSON file path
    time_t last_mod_time = 0;  // To store the last modification time of the file

    while (true) {
        // Get the current modification time
        time_t current_mod_time = get_last_modification_time(file_path);

        // Check if the file has been updated
        if (current_mod_time != last_mod_time) {
            cout << "\n--- Detected new data in motion_data.json ---\n" << endl;

            // Update the last modification time
            last_mod_time = current_mod_time;

            // Read and print the 2D array from the JSON file
            vector<vector<float>> motion_data = read_json_file(file_path);

            // Print the array in a formatted way
            cout << "Received 2D Array from JSON file:" << endl;
            for (const auto& row : motion_data) {
                cout << "[";
                for (size_t i = 0; i < row.size(); ++i) {
                    cout << row[i];
                    if (i < row.size() - 1) cout << ", ";
                }
                cout << "]" << endl;
            }
        }

        // Wait for a second before checking again
        this_thread::sleep_for(chrono::seconds(1));
    }

    return 0;
}


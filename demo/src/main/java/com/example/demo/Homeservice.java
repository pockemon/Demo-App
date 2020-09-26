package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.HomeEntity;

@Service
public class Homeservice {

    private static List<HomeEntity> he = new ArrayList<>();
    private static int idCounter = 0;

    static {
        he.add(new HomeEntity(++idCounter, "JPMorgan Chase", "New York City", "$3,139"));
        he.add(new HomeEntity(++idCounter, "Bank of America", "Charlotte, North Carolina", "$2,619"));
        he.add(new HomeEntity(++idCounter, "Citigroup", "New York City", "$2,219"));
        he.add(new HomeEntity(++idCounter, "Wells Fargo", "San Francisco", "$1,981"));
    }

    public List<HomeEntity> findAll() {
        return he;
    }
}

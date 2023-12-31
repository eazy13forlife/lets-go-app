package learn.letsgo.Controller.API;

import learn.letsgo.Domain.API.TicketMasterEventService;
import learn.letsgo.Models.API.TicketMasterEvent;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TicketMasterEventController {
    private final TicketMasterEventService eventService;

    public TicketMasterEventController(TicketMasterEventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/ticketmaster/events")
    public List<TicketMasterEvent> getEvents(@RequestParam(name = "postalCode", required = false) String postalCode) {
        return eventService.getEvents(postalCode);
    }

    @GetMapping("/ticketmaster/events/id/{id}")
    public TicketMasterEvent getEventById(@PathVariable String id) {
        return eventService.getEventById(id);
    }
}
